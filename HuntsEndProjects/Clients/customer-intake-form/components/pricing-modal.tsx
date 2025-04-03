"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"

export function PricingModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1">
          <Info className="h-4 w-4" />
          <span>View Pricing</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] w-[1200px] max-h-[90vh] p-0 overflow-hidden">
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Plans and Pricing</DialogTitle>
            <DialogDescription className="text-center">
              Detailed information about our VoIP service plans and pricing
            </DialogDescription>
          </DialogHeader>
        </div>

        <Tabs defaultValue="plans" className="w-full">
          <div className="border-b">
            <div className="px-6">
              <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto">
                <TabsTrigger value="plans">Plans</TabsTrigger>
                <TabsTrigger value="voice">Voice Addons</TabsTrigger>
                <TabsTrigger value="fax">Fax Services</TabsTrigger>
                <TabsTrigger value="other">Other Services</TabsTrigger>
              </TabsList>
            </div>
          </div>

          <div className="p-6 overflow-y-auto max-h-[70vh]">
            <TabsContent value="plans" className="mt-0 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">PLANS AND PRICING</h3>
                <div className="grid grid-cols-4 text-sm">
                  <div className="font-medium p-2 border-b-2 border-teal-600">FEATURE</div>
                  <div className="font-medium p-2 text-center border-b-2 border-teal-600">GENERAL EXTENSION*</div>
                  <div className="font-medium p-2 text-center border-b-2 border-teal-600">BUNDLED SEAT</div>
                  <div className="font-medium p-2 text-center border-b-2 border-teal-600">BUNDLED PREMIUM SEAT</div>

                  <div className="p-2 border-b">Unlimited US & CA Calling</div>
                  <div className="p-2 text-center border-b">•</div>
                  <div className="p-2 text-center border-b">•</div>
                  <div className="p-2 text-center border-b">•</div>

                  <div className="p-2 border-b">Unlimited Auto Attendants</div>
                  <div className="p-2 text-center border-b">•</div>
                  <div className="p-2 text-center border-b">•</div>
                  <div className="p-2 text-center border-b">•</div>

                  <div className="p-2 border-b">Unlimited Call Queues</div>
                  <div className="p-2 text-center border-b">•</div>
                  <div className="p-2 text-center border-b">•</div>
                  <div className="p-2 text-center border-b">•</div>

                  <div className="p-2 border-b">Call Recording</div>
                  <div className="p-2 text-center border-b">•</div>
                  <div className="p-2 text-center border-b">•</div>
                  <div className="p-2 text-center border-b">•</div>

                  <div className="p-2 border-b">Advanced PBX Features</div>
                  <div className="p-2 text-center border-b">•</div>
                  <div className="p-2 text-center border-b">•</div>
                  <div className="p-2 text-center border-b">•</div>

                  <div className="p-2 border-b">Includes Phone Number</div>
                  <div className="p-2 text-center border-b"></div>
                  <div className="p-2 text-center border-b">•</div>
                  <div className="p-2 text-center border-b">•</div>

                  <div className="p-2 border-b">Supports Multiple Devices</div>
                  <div className="p-2 text-center border-b"></div>
                  <div className="p-2 text-center border-b">•</div>
                  <div className="p-2 text-center border-b">•</div>

                  <div className="p-2 border-b">Voicemail Transcription</div>
                  <div className="p-2 text-center border-b"></div>
                  <div className="p-2 text-center border-b"></div>
                  <div className="p-2 text-center border-b">•</div>

                  <div className="p-2 border-b">Business SMS</div>
                  <div className="p-2 text-center border-b"></div>
                  <div className="p-2 text-center border-b"></div>
                  <div className="p-2 text-center border-b">•</div>

                  <div className="p-2 border-b">Native Fax Digital Faxing</div>
                  <div className="p-2 text-center border-b"></div>
                  <div className="p-2 text-center border-b"></div>
                  <div className="p-2 text-center border-b">•</div>
                </div>
                <p className="text-xs text-gray-500 mt-1">*Disclaimer: Limit one per three seats</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-medium mb-2 text-lg">Service Plans</h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex justify-between items-start">
                        <h5 className="font-semibold">Bundled Seat</h5>
                        <span className="font-bold text-teal-600">$24.50/ea</span>
                      </div>
                      <p className="text-sm mt-2">
                        This is the recommended license for office staff. The seat can have up to five devices assigned
                        and can support up to one phone number. Users will have portal access and over 100 features to
                        route callers to the correct member of your team.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex justify-between items-start">
                        <h5 className="font-semibold">Bundled Premium Seat</h5>
                        <span className="font-bold text-teal-600">$34.50/ea</span>
                      </div>
                      <p className="text-sm mt-2">
                        Everything in the Bundled Seat plus SMS, Voicemail Transcription, Native Fax Digital. The seat
                        has an additional phone number included to support the fax account.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex justify-between items-start">
                        <h5 className="font-semibold">General Extension</h5>
                        <span className="font-bold text-teal-600">$9.99/ea</span>
                      </div>
                      <p className="text-sm mt-2">
                        This is typically assigned to a shared area phone such as a conference room or warehouse. Only
                        one device can be supported on a General Extension, and it cannot be assigned a phone number.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-lg">MOBILE-X SERVICES</h4>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex justify-between items-start">
                        <h5 className="font-semibold">Mobile User 2GB</h5>
                        <span className="font-bold text-teal-600">$55/ea</span>
                      </div>
                      <p className="text-sm mt-2">
                        Includes physical SIM to use an unlocked GSM cell phone to connect with users seat as a
                        secondary device. Operates on AT&T and T-Mobile carrier networks. All features from the Bundled
                        Seat are included. Includes 2GB of data.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex justify-between items-start">
                        <h5 className="font-semibold">Mobile User 5GB</h5>
                        <span className="font-bold text-teal-600">$75/ea</span>
                      </div>
                      <p className="text-sm mt-2">
                        Includes physical SIM to use an unlocked GSM cell phone to connect with users seat as a
                        secondary device. Operates on AT&T and T-Mobile carrier networks. All features from the Bundled
                        Seat are included. Includes 5GB of data.
                      </p>
                    </div>

                    <div className="border rounded-lg p-4 bg-gray-50">
                      <div className="flex justify-between items-start">
                        <h5 className="font-semibold">Mobile User 10GB</h5>
                        <span className="font-bold text-teal-600">$110/ea</span>
                      </div>
                      <p className="text-sm mt-2">
                        Includes physical SIM to use an unlocked GSM cell phone to connect with users seat as a
                        secondary device. Operates on AT&T and T-Mobile carrier networks. All features from the Bundled
                        Seat are included. Includes 10GB of data.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">*Data overages billed at $0.04/MB</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="voice" className="mt-0">
              <h3 className="text-xl font-semibold mb-4">VOICE ADDONS</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-start">
                    <h5 className="font-semibold">Toll-Free Numbers</h5>
                    <div className="text-right">
                      <div className="font-bold text-teal-600">$4.95/ea</div>
                      <div className="text-sm text-teal-600">$0.05/min</div>
                    </div>
                  </div>
                  <p className="text-sm mt-2">
                    Toll-Free Numbers are billed both per number and per minute of inbound use. If you don't know your
                    monthly usage, then start at our standard pricing. Toll-Free packages can be added at any time. Only
                    one package needed per account. Minutes are pooled among all Toll-Free numbers.
                  </p>
                </div>

                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-start">
                    <h5 className="font-semibold">Additional Phone Number</h5>
                    <span className="font-bold text-teal-600">$2.50/ea</span>
                  </div>
                  <p className="text-sm mt-2">
                    Additional Phone Numbers can be added as a second number for a user or to be saved in your systems
                    inventory for future use.
                  </p>
                </div>

                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-start">
                    <h5 className="font-semibold">SMS/MMS</h5>
                    <span className="font-bold text-teal-600">$5.00/ea</span>
                  </div>
                  <p className="text-sm mt-2">
                    Give your users the ability to send text or media messages. This can be added to a user or to a call
                    queue.
                  </p>
                </div>

                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-start">
                    <h5 className="font-semibold">Voicemail Transcription</h5>
                    <span className="font-bold text-teal-600">$2.50/ea</span>
                  </div>
                  <p className="text-sm mt-2">
                    Voicemail Transcription will turn voicemails into text and deliver them via email. This can be added
                    to a user or general mailbox.
                  </p>
                </div>

                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-start">
                    <h5 className="font-semibold">Call Center</h5>
                    <span className="font-bold text-teal-600">$15.00/ea</span>
                  </div>
                  <p className="text-sm mt-2">
                    Call Center features include live monitoring, live and scheduled reports, customizable SLAs, and
                    other metrics. Can be used for a Call Center manager or Call Center user role.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="fax" className="mt-0">
              <h3 className="text-xl font-semibold mb-4">FAX SERVICES</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-start">
                    <h5 className="font-semibold">Digital</h5>
                    <span className="font-bold text-teal-600">$9.99/ea</span>
                  </div>
                  <p className="text-sm mt-2">
                    Digital faxing solution to send faxes through a secure portal or via email. $22.50 if not bundled
                    with any other voice services.
                  </p>
                </div>

                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-start">
                    <h5 className="font-semibold">Analog</h5>
                    <span className="font-bold text-teal-600">$22.50/ea</span>
                  </div>
                  <p className="text-sm mt-2">
                    Faxing solution to connect your fax or copier machine. Requires faxing ATA provided by CTS.
                  </p>
                </div>

                <div className="border rounded-lg p-4 bg-gray-50">
                  <div className="flex justify-between items-start">
                    <h5 className="font-semibold">Toll-Free</h5>
                    <span className="font-bold text-teal-600">$14.99/ea</span>
                  </div>
                  <p className="text-sm mt-2">
                    Toll-Free Digital faxing solution to send faxes through a secure portal or via email.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="other" className="mt-0 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">CONFERENCE SERVICES</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-start">
                      <h5 className="font-semibold">Snap HD Meeting</h5>
                      <span className="font-bold text-teal-600">$5 - $150/ea</span>
                    </div>
                    <p className="text-sm mt-2">
                      Traditional video meeting with all attendees visible and able to participate. Pricing is based on
                      the maximum number of participants.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-start">
                      <h5 className="font-semibold">Snap HD Webinar</h5>
                      <span className="font-bold text-teal-600">$20-$250/ea</span>
                    </div>
                    <p className="text-sm mt-2">
                      One or more hosts and presenters who present to a group of attendees who can only watch, not
                      interact. Pricing is based on the maximum number of participants.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-start">
                      <h5 className="font-semibold">Audio Conference Bridge</h5>
                      <span className="font-bold text-teal-600">$19.50-89.50/ea</span>
                    </div>
                    <p className="text-sm mt-2">
                      Private or shared voice conference lines with leader and participant PINs. Pricing is based on the
                      maximum number of participants.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">INTEGRATIONS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-start">
                      <h5 className="font-semibold">Microsoft Teams Integration</h5>
                      <span className="font-bold text-teal-600">$5.00/ea</span>
                    </div>
                    <p className="text-sm mt-2">
                      Turn your Microsoft Teams into a softphone extension of your existing phone system.
                    </p>
                  </div>

                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-start">
                      <h5 className="font-semibold">UC Integrator Solo</h5>
                      <span className="font-bold text-teal-600">$2/user</span>
                    </div>
                    <p className="text-sm mt-2">Integrate your telephone system with your CRM or business systems.</p>
                  </div>

                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-start">
                      <h5 className="font-semibold">UC Integrator Team</h5>
                      <span className="font-bold text-teal-600">$5/user</span>
                    </div>
                    <p className="text-sm mt-2">Integrate your telephone system with your CRM or business systems.</p>
                  </div>

                  <div className="border rounded-lg p-4 bg-gray-50">
                    <div className="flex justify-between items-start">
                      <h5 className="font-semibold">UC Integrator Unite</h5>
                      <span className="font-bold text-teal-600">$10/user</span>
                    </div>
                    <p className="text-sm mt-2">Integrate your telephone system with your CRM or business systems.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

