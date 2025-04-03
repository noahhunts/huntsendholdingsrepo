"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Loader2, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { submitForm } from "@/app/actions"
import { PricingModal } from "./pricing-modal"

const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  contactNumber: z.string().min(10, "Valid phone number is required"),
  contactEmail: z.string().email("Valid email is required"),
  bestTimeToReach: z.string().min(1, "Please select a time"),
  serviceAddress: z.string().min(1, "Service address is required"),
  numberOfLines: z.string().min(1, "Number of lines is required"),
  hasFaxNumber: z.enum(["yes", "no"]),
  faxOption: z.string().optional(),
  wire3Equipment: z.any().optional(),
  serviceProviderEquipment: z.any().optional(),
  phoneInvoice: z.any().optional(),
})

type FormValues = z.infer<typeof formSchema>

export function CustomerIntakeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      contactNumber: "",
      contactEmail: "",
      bestTimeToReach: "",
      serviceAddress: "",
      numberOfLines: "",
      hasFaxNumber: "no",
      faxOption: "",
    },
  })

  const hasFaxNumber = form.watch("hasFaxNumber")

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)

    try {
      const formData = new FormData()

      // Append text fields
      Object.entries(data).forEach(([key, value]) => {
        if (typeof value === "string") {
          formData.append(key, value)
        }
      })

      // Append files
      if (data.wire3Equipment?.[0]) {
        formData.append("wire3Equipment", data.wire3Equipment[0])
      }

      if (data.serviceProviderEquipment?.[0]) {
        formData.append("serviceProviderEquipment", data.serviceProviderEquipment[0])
      }

      if (data.phoneInvoice?.[0]) {
        formData.append("phoneInvoice", data.phoneInvoice[0])
      }

      await submitForm(formData)

      setIsSubmitted(true)
      toast({
        title: "Form submitted successfully",
        description: "We'll be in touch with you shortly.",
      })
    } catch (error) {
      console.error(error)
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="w-full">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center py-12">
            <div className="rounded-full bg-teal-100 p-3 mb-4">
              <Check className="h-8 w-8 text-teal-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h2>
            <p className="text-gray-600 text-center max-w-md">
              Your form has been submitted successfully. Our team will review your information and contact you shortly.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" {...form.register("firstName")} placeholder="Enter your first name" />
              {form.formState.errors.firstName && (
                <p className="text-sm text-red-500">{form.formState.errors.firstName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" {...form.register("lastName")} placeholder="Enter your last name" />
              {form.formState.errors.lastName && (
                <p className="text-sm text-red-500">{form.formState.errors.lastName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactNumber">Contact Number</Label>
              <Input id="contactNumber" {...form.register("contactNumber")} placeholder="(555) 555-5555" />
              {form.formState.errors.contactNumber && (
                <p className="text-sm text-red-500">{form.formState.errors.contactNumber.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input id="contactEmail" type="email" {...form.register("contactEmail")} placeholder="your@email.com" />
              {form.formState.errors.contactEmail && (
                <p className="text-sm text-red-500">{form.formState.errors.contactEmail.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="bestTimeToReach">Best Time to Reach You</Label>
              <Select onValueChange={(value) => form.setValue("bestTimeToReach", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                  <SelectItem value="evening">Evening (5PM - 8PM)</SelectItem>
                </SelectContent>
              </Select>
              {form.formState.errors.bestTimeToReach && (
                <p className="text-sm text-red-500">{form.formState.errors.bestTimeToReach.message}</p>
              )}
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="serviceAddress">Service Address</Label>
              <Textarea
                id="serviceAddress"
                {...form.register("serviceAddress")}
                placeholder="Enter your service address"
                className="min-h-[80px]"
              />
              {form.formState.errors.serviceAddress && (
                <p className="text-sm text-red-500">{form.formState.errors.serviceAddress.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="numberOfLines">How many lines will be porting to our service?</Label>
                <PricingModal />
              </div>
              <Input id="numberOfLines" {...form.register("numberOfLines")} placeholder="Enter number of lines" />
              {form.formState.errors.numberOfLines && (
                <p className="text-sm text-red-500">{form.formState.errors.numberOfLines.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Do you have a fax number?</Label>
              <RadioGroup
                defaultValue="no"
                onValueChange={(value) => form.setValue("hasFaxNumber", value as "yes" | "no")}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="fax-yes" />
                  <Label htmlFor="fax-yes" className="cursor-pointer">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="fax-no" />
                  <Label htmlFor="fax-no" className="cursor-pointer">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {hasFaxNumber === "yes" && (
              <div className="space-y-2 md:col-span-2">
                <Label>Fax Options</Label>
                <RadioGroup onValueChange={(value) => form.setValue("faxOption", value)} className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="efax" id="efax" />
                    <Label htmlFor="efax" className="cursor-pointer">
                      eFax for $10/month
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="physical" id="physical" />
                    <Label htmlFor="physical" className="cursor-pointer">
                      Physical fax device ($185 or $15/month + $10/month service)
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            <div className="space-y-2 md:col-span-2">
              <Label>Upload Photo of Wire3 equipment</Label>
              <div className="flex flex-col">
                <label
                  htmlFor="wire3Equipment"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-teal-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-3 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-700">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 5MB)</p>
                  </div>
                  <Input
                    id="wire3Equipment"
                    type="file"
                    accept="image/*"
                    onChange={(e) => form.setValue("wire3Equipment", e.target.files)}
                    className="hidden"
                  />
                </label>
                {form.watch("wire3Equipment")?.[0]?.name && (
                  <p className="mt-2 text-sm text-teal-600">Selected: {form.watch("wire3Equipment")[0].name}</p>
                )}
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Upload Photo of current service provider's equipment</Label>
              <div className="flex flex-col">
                <label
                  htmlFor="serviceProviderEquipment"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-teal-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-3 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-700">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 5MB)</p>
                  </div>
                  <Input
                    id="serviceProviderEquipment"
                    type="file"
                    accept="image/*"
                    onChange={(e) => form.setValue("serviceProviderEquipment", e.target.files)}
                    className="hidden"
                  />
                </label>
                {form.watch("serviceProviderEquipment")?.[0]?.name && (
                  <p className="mt-2 text-sm text-teal-600">
                    Selected: {form.watch("serviceProviderEquipment")[0].name}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Upload Most recent phone invoice</Label>
              <div className="flex flex-col">
                <label
                  htmlFor="phoneInvoice"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-teal-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-3 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-700">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500">PDF, PNG, JPG or JPEG (MAX. 5MB)</p>
                  </div>
                  <Input
                    id="phoneInvoice"
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) => form.setValue("phoneInvoice", e.target.files)}
                    className="hidden"
                  />
                </label>
                {form.watch("phoneInvoice")?.[0]?.name && (
                  <p className="mt-2 text-sm text-teal-600">Selected: {form.watch("phoneInvoice")[0].name}</p>
                )}
                <p className="text-sm text-gray-500 mt-1">Note: Monthly cost can be redacted</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Important Notes:</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Most recent phone bill is required for porting requests</li>
          <li>• Taxes, E911 fees, and telecom regulatory charges are not included in the quoted prices</li>
          <li>• $125 one-time installation fee per site, non-refundable</li>
        </ul>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Form"
        )}
      </Button>
    </form>
  )
}

