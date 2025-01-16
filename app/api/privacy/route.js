import { ImageResponse } from "next/og";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontSize: 11,
          }}
        >
          Welcome to{"  "}
          <strong
            style={{
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            Indianconstitution
          </strong>
          <br />. Your privacy is important to us, and we are committed to
          protecting any personal information you may provide while using our
          website.
        </p>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
