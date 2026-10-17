import type { Metadata } from 'next';
import {
  ChevronRight,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  TriangleAlert,
} from 'lucide-react';
import emergencyDepartment from '@/assets/emergency/emergency-department.webp';
import jadranPharmacy from '@/assets/emergency/jadran-pharmacy.webp';
import touristClinic from '@/assets/emergency/tourist-clinic.webp';
import PageHeader from '@/components/PageHeader';
import PhotoButton from '@/components/PhotoButton';

export const metadata: Metadata = {
  title: 'Help & emergency',
};

const numbers = [
  { name: 'Ambulance', number: '194' },
  { name: 'Police', number: '192' },
  { name: 'Fire', number: '193' },
];

const medical = [
  {
    name: 'Jadran Pharmacy',
    status: 'Open 24/7',
    text: 'Open day and night, including weekends and public holidays. Prescription and non-prescription medication available.',
    mapsUrl: 'https://maps.google.com/?q=Ljekarna+Jadran+Zadar',
    image: jadranPharmacy,
  },
  {
    name: 'Emergency Department',
    status: 'Zadar General Hospital',
    text: 'For urgent medical situations requiring immediate treatment at Zadar General Hospital.',
    mapsUrl:
      'https://maps.google.com/?q=Objedinjeni+hitni+bolnicki+prijem+OB+Zadar',
    image: emergencyDepartment,
  },
  {
    name: 'Tourist Clinic',
    status: 'Non-urgent care, weekends too',
    text: 'Medical care for tourists and visitors with non-emergency health concerns, including weekends and public holidays.',
    mapsUrl: 'https://maps.app.goo.gl/L7vfsTueeBXGpgeUA',
    image: touristClinic,
  },
];

const photos = medical.map((place) => ({
  src: place.image,
  caption: `${place.name} · ${place.text}`,
}));

const EmergencyPage = () => {
  return (
    <>
      <PageHeader title="Help & emergency" />

      <main className="mx-auto w-full max-w-xl flex-1 px-5 pt-6 pb-10">
        <h1 className="text-4xl font-extrabold">Need help?</h1>

        <section className="mt-6 rounded-3xl bg-danger p-6 text-on-danger">
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-sm font-bold tracking-wider text-on-danger/80 uppercase">
              Any emergency
            </h2>
            <TriangleAlert className="size-7 shrink-0" />
          </div>

          <p className="mt-2 text-7xl font-extrabold tabular-nums">112</p>
          <p className="mt-3 text-on-danger/90">
            Police, ambulance and fire — English spoken.
          </p>

          <a
            href="tel:112"
            className="mt-5 flex h-14 items-center justify-center gap-2 rounded-2xl bg-surface font-bold text-danger transition-colors duration-200 hover:bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface"
          >
            <Phone className="size-5" />
            Call 112
          </a>
        </section>

        <ul role="list" className="mt-4 grid grid-cols-3 gap-3">
          {numbers.map((item) => (
            <li key={item.number}>
              <a
                href={`tel:${item.number}`}
                className="flex h-full flex-col items-center rounded-3xl border border-line bg-surface px-2 py-4 text-center transition-colors duration-200 hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <span className="text-sm text-muted">{item.name}</span>
                <span className="mt-1 text-3xl font-extrabold tabular-nums">
                  {item.number}
                </span>
                <span className="mt-1 text-sm font-bold text-danger">Call</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex items-center gap-4 rounded-3xl border border-line bg-surface p-4">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent [&_svg]:size-6">
            <MapPin />
          </span>

          <div className="min-w-0 flex-1">
            <h2 className="text-xs font-bold tracking-wider text-muted uppercase">
              Calling from the apartment?
            </h2>
            <p className="mt-0.5 font-extrabold">
              Example Street 1, Zadar · 3rd floor
            </p>
          </div>
        </div>

        <h2 className="mt-8 text-xs font-bold tracking-wider text-muted uppercase">
          Medical help nearby
        </h2>

        <ul
          role="list"
          className="mt-3 divide-y divide-line rounded-3xl border border-line bg-surface"
        >
          {medical.map((place, index) => (
            <li key={place.name} className="flex items-center gap-4 p-4">
              <PhotoButton
                photos={photos}
                index={index}
                sizes="128px"
                className="size-16 shrink-0 rounded-2xl"
              />

              <div className="min-w-0 flex-1">
                <h3 className="font-extrabold">{place.name}</h3>
                <p
                  className={`mt-0.5 text-sm ${index === 0 ? 'font-bold text-success' : 'text-muted'}`}
                >
                  {place.status}
                </p>
              </div>

              <a
                href={place.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Directions to ${place.name}`}
                className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-200 hover:bg-line focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Navigation className="size-5" />
              </a>
            </li>
          ))}
        </ul>

        <h2 className="mt-8 text-xs font-bold tracking-wider text-muted uppercase">
          Something wrong in the apartment?
        </h2>

        <a
          href="https://wa.me/YOUR_PHONE_NUMBER"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-3 flex items-center gap-4 rounded-3xl border border-line bg-surface p-4 transition-colors duration-200 hover:bg-success-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-success-soft text-success transition-colors duration-200 group-hover:bg-surface [&_svg]:size-6">
            <MessageCircle />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block font-extrabold">Message your host</span>
            <span className="mt-0.5 block text-sm text-muted">
              Broken appliance, locked out, leaks — via WhatsApp
            </span>
          </span>

          <ChevronRight className="size-5 shrink-0 text-muted" />
        </a>
      </main>
    </>
  );
};

export default EmergencyPage;
