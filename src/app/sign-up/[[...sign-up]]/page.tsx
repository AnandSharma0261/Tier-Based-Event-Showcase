import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <SignUp
        appearance={{
          elements: {
            card: "shadow-xl rounded-2xl"
          }
        }}
      />
    </div>
  );
}
