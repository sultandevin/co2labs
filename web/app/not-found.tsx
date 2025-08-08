import Container from "@/components/container";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </Container>
  );
};

export default NotFoundPage;
