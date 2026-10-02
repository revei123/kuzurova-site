import { validateContact } from "@/lib/contact";
import type { ContactPayload } from "@/types/content";

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = (await request.json()) as Partial<ContactPayload>;
  } catch {
    return Response.json({ ok: false, error: "Некорректный запрос." }, { status: 400 });
  }

  if (body.company) {
    return Response.json({ ok: true });
  }

  const error = validateContact(body);
  if (error) {
    return Response.json({ ok: false, error }, { status: 400 });
  }

  return Response.json({ ok: true });
}
