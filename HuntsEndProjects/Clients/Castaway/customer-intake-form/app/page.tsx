import { CustomerIntakeForm } from "@/components/customer-intake-form"
import { CastawayLogo } from "@/components/castaway-logo"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <CastawayLogo className="h-16 w-auto mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900">VoIP Service Transition</h1>
          <p className="mt-2 text-lg text-gray-600">Complete this form to begin your transition to our VoIP service</p>
        </div>
        <CustomerIntakeForm />
      </div>
    </main>
  )
}

