import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "R-DRIVE — Edge Telemetry Device",
  description:
    "Compact CAN bus edge telemetry hardware for commercial EVs. 4G LTE, GPS, DBC-based signal decoding, and offline buffering in a plug-and-play form factor.",
};

export default function RDrivePage() {
  const capabilities = [
    {
      title: "4G LTE Cellular",
      description:
        "Real-time data upload over commercial LTE networks. No Wi-Fi dependency — your data flows from the vehicle to the cloud wherever there is cellular coverage.",
    },
    {
      title: "Built-in GPS",
      description:
        "Continuous vehicle location tracking with high-accuracy positioning. Correlate vehicle health data with routes, stops, and geofenced zones.",
    },
    {
      title: "CAN Bus Signal Decoding",
      description:
        "Automotive-grade CAN transceiver with DBC-based signal decoding at the edge. Converts raw CAN frames into named, scaled, engineering-unit values before upload.",
    },
    {
      title: "Edge Processing",
      description:
        "On-device signal decoding, data batching, and compression. Local buffering when offline with automatic upload resume when connectivity returns — zero data loss.",
    },
    {
      title: "Flexible Power",
      description:
        "Powered via standard OBD-II port or direct 12V harness connection. Low power draw with intelligent sleep modes for parked vehicles.",
    },
    {
      title: "Compact Form Factor",
      description:
        "Fully enclosed, automotive-grade housing that installs under the dash or in the engine bay. No external antennas, no dangling cables.",
    },
  ];

  const dataPoints = [
    "Battery state of charge (SOC)",
    "Individual cell voltages and temperatures",
    "Motor and inverter temperatures",
    "Charging status and power levels",
    "Coolant system temperatures",
    "Drivetrain health indicators",
    "High-voltage system status",
    "Regenerative braking data",
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-24 px-6 gradient-mesh">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center pt-12">
            <div>
              <Link
                href="/products"
                className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-6"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Products
              </Link>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                R-DRIVE
              </h1>
              <p className="text-electric text-lg font-medium mb-6">
                Edge Telemetry Device
              </p>
              <p className="text-lg text-gray-400 mb-8">
                A compact CAN bus edge telemetry device that plugs into any commercial
                EV and starts streaming deep vehicle health data in minutes. Signal-level
                diagnostics, decoded at the edge, delivered to the cloud in near real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-electric hover:bg-electric-dark text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Request Hardware Specs
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border border-white/10 hover:border-white/20 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Start a Pilot
                </Link>
              </div>
            </div>

            {/* Device visual placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-72 h-48 rounded-2xl border-2 border-electric/20 bg-navy-900 flex items-center justify-center relative">
                <div className="absolute -top-3 left-8 w-2 h-6 rounded-full bg-electric/40" />
                <div className="absolute -top-3 left-14 w-2 h-6 rounded-full bg-electric/30" />
                <svg className="w-20 h-20 text-electric/40" fill="none" viewBox="0 0 80 80" stroke="currentColor" strokeWidth={1}>
                  <rect x="10" y="20" width="60" height="40" rx="6" />
                  <path d="M22 32h12M46 32h12M22 40h36M22 48h24" />
                </svg>
                <div className="absolute bottom-3 right-4 flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-electric animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-cyan/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12">Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="rounded-xl border border-white/5 bg-surface p-6"
              >
                <h3 className="text-white font-semibold mb-3">{cap.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Points */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                What R-DRIVE captures
              </h2>
              <p className="text-gray-400 mb-8">
                R-DRIVE decodes the raw CAN bus data flowing through your vehicle&apos;s
                network and extracts the signals that matter for fleet health monitoring.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {dataPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                DBC flexibility
              </h2>
              <p className="text-gray-400 mb-6">
                R-DRIVE ships with built-in support for popular commercial EV platforms.
                For any vehicle with an accessible CAN bus, upload a custom DBC file and
                R-DRIVE will decode those signals too.
              </p>
              <div className="rounded-xl border border-white/5 bg-surface p-6">
                <div className="text-sm text-gray-500 font-mono space-y-1">
                  <p className="text-electric">BO_ 0x6B0 BMS_CellVoltages:</p>
                  <p className="pl-4">SG_ Cell_01_Voltage : 0|16@1+ (0.001,0)</p>
                  <p className="pl-4">SG_ Cell_02_Voltage : 16|16@1+ (0.001,0)</p>
                  <p className="pl-4">SG_ Cell_03_Voltage : 32|16@1+ (0.001,0)</p>
                  <p className="pl-4 text-gray-600">...</p>
                </div>
                <p className="text-xs text-gray-600 mt-4">
                  Example DBC signal definition for battery cell voltage decoding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Install",
                description:
                  "Plug R-DRIVE into the vehicle's OBD-II port or wire it to a 12V harness. Mount the compact enclosure under the dash or in the engine bay. Five minutes, no special tools.",
              },
              {
                step: "2",
                title: "Connect",
                description:
                  "R-DRIVE powers on, locks onto the cellular network and GPS satellites, and begins decoding CAN signals immediately. Data flows to the SIGNAL cloud platform in near real-time.",
              },
              {
                step: "3",
                title: "Monitor",
                description:
                  "Open the SIGNAL dashboard and see live vehicle health data. Battery SOC, cell voltages, motor temps, charging status — every signal, decoded and visualized.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-electric/10 text-electric mx-auto mb-4 flex items-center justify-center text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-white font-semibold mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to instrument your fleet?
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            We ship pilot hardware within two weeks. Start with 5 vehicles and scale
            from there.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-electric hover:bg-electric-dark text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-lg"
          >
            Start a Pilot
          </Link>
        </div>
      </section>
    </>
  );
}
