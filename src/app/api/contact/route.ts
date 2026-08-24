import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const LEAD_API_URL = process.env.NEXT_PUBLIC_LEAD_API_URL;

    // IMPORTANT: Target endpoint is supposed to be the TeemSetu HRMS SaaS.
    // If the endpoint is not configured, we simulate a success for now.
    if (!LEAD_API_URL) {
      console.warn("NEXT_PUBLIC_LEAD_API_URL is not set. Simulating successful form submission.");
      console.log("Payload:", body);
      
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, message: "Lead submitted (simulated)" }, { status: 200 });
    }

    const res = await fetch(LEAD_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add authorization headers if required by TeemSetu API:
        // "Authorization": `Bearer ${process.env.LEAD_API_TOKEN}`
      },
      body: JSON.stringify({
        ...body,
        source: "Portfolio Website",
        timestamp: new Date().toISOString()
      }),
    });

    if (!res.ok) {
      throw new Error(`API responded with status: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json({ success: true, data }, { status: 200 });

  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit lead" },
      { status: 500 }
    );
  }
}
