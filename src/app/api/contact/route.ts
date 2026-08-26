import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name = "", email = "", phone = "", company = "", projectType = "", budget = "", message = "" } = body;

    if (!email || !name) {
      return NextResponse.json(
        { success: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

    // If HubSpot token is not configured yet, simulate success and warn in terminal
    if (!HUBSPOT_ACCESS_TOKEN) {
      console.warn("⚠️ HUBSPOT_ACCESS_TOKEN is not set in your .env.local file.");
      console.log("Simulating lead reception for:", { name, email, phone, company, projectType, budget, message });
      await new Promise((resolve) => setTimeout(resolve, 800));
      return NextResponse.json(
        { 
          success: true, 
          message: "Lead recorded in development (Add HUBSPOT_ACCESS_TOKEN to .env.local to send to real HubSpot CRM)." 
        },
        { status: 200 }
      );
    }

    // Split name into first and last name
    const nameParts = name.trim().split(" ");
    const firstname = nameParts[0] || "";
    const lastname = nameParts.slice(1).join(" ") || "";

    // 1. Create or Find Contact in HubSpot CRM
    let contactId: string | null = null;

    const contactPayload = {
      properties: {
        email: email.trim().toLowerCase(),
        firstname: firstname,
        lastname: lastname,
        ...(phone ? { phone: phone.trim() } : {}),
        ...(company ? { company: company.trim() } : {}),
        hs_lead_status: "NEW",
      }
    };

    const createContactRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contactPayload)
    });

    if (createContactRes.ok) {
      const contactData = await createContactRes.json();
      contactId = contactData.id;
    } else if (createContactRes.status === 409) {
      // Contact already exists in HubSpot, look up existing contact by email
      const searchRes = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(email.trim().toLowerCase())}?idProperty=email`, {
        headers: {
          "Authorization": `Bearer ${HUBSPOT_ACCESS_TOKEN}`
        }
      });
      if (searchRes.ok) {
        const existingContact = await searchRes.json();
        contactId = existingContact.id;
      }
    } else {
      const errData = await createContactRes.json();
      console.error("HubSpot Contact Creation Error:", errData);
      throw new Error(errData.message || "Failed to create contact in HubSpot");
    }

    // 2. If contact exists/created, create a Note with the full project details attached to the contact
    if (contactId) {
      const noteBody = `
<b>New Portfolio Inquiry</b><br/><br/>
<b>Name:</b> ${name}<br/>
<b>Email:</b> ${email}<br/>
<b>Phone:</b> ${phone || "Not provided"}<br/>
<b>Company:</b> ${company || "Not provided"}<br/>
<b>Project Type:</b> ${projectType || "Not specified"}<br/>
<b>Budget:</b> ${budget || "Not specified"}<br/><br/>
<b>Message:</b><br/>
${message.replace(/\n/g, "<br/>")}
      `.trim();

      const notePayload = {
        properties: {
          hs_timestamp: new Date().toISOString(),
          hs_note_body: noteBody
        },
        associations: [
          {
            to: { id: contactId },
            types: [
              {
                associationCategory: "HUBSPOT_DEFINED",
                associationTypeId: 202 // 202 is Note-to-Contact association in HubSpot
              }
            ]
          }
        ]
      };

      await fetch("https://api.hubapi.com/crm/v3/objects/notes", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(notePayload)
      });
    }

    return NextResponse.json({ success: true, message: "Lead saved to HubSpot CRM successfully!" }, { status: 200 });

  } catch (error: unknown) {
    console.error("Error saving lead to HubSpot:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to save lead to HubSpot";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
