import { SignUp } from "@clerk/clerk-react";
import AWSCertified1Img from "@/assets/aws-certified-1.webp";
import MicrosoftCertified1Img from "@/assets/microsoft-certified-1.webp";
import AWSCertified3Img from "@/assets/aws-certified-3.webp";

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen w-full">
      {/* Left side - Hero Section */}
      <div className="relative hidden lg:block lg:w-1/2">
        <div className="absolute inset-0 bg-linear-to-br from-secondary via-primary/60 to-secondary" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <div className="flex items-center space-x-3 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            <span className="text-xl font-bold">SkillMentor</span>
          </div>

          <div className="relative z-20">
            <blockquote className="space-y-2">
              <p className="text-2xl font-medium leading-relaxed text-white">
                &ldquo;This platform has completely transformed how I approach
                my AWS certification journey.&rdquo;
              </p>
              <footer className="mt-4">
                <cite className="text-lg font-medium text-white">
                  Sofia Davis
                </cite>
              </footer>
            </blockquote>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[AWSCertified1Img, MicrosoftCertified1Img, AWSCertified3Img].map(
              (src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl overflow-hidden"
                >
                  <img
                    src={src}
                    alt={`Testimonial ${i + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex w-full items-center justify-center px-6 lg:w-1/2">
        <div className="w-full max-w-[400px] space-y-8">
          <SignUp
            forceRedirectUrl="/dashboard"
            appearance={{
              elements: {
                formButtonPrimary: "bg-primary",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
