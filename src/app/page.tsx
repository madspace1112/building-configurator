import { userAgent } from "next/server";
import { headers } from "next/headers";
import { Home } from "./_components/Home";

export default async function HomePage() {
  const hh = await headers();
  const { os } = userAgent({ headers: hh });
  const device =
    os.name === "iOS" || os.name === "Android" ? "mobile" : "desktop";

  return (
    <div className="flex h-screen w-screen">
      <Home device={device} />
    </div>
  );
}
