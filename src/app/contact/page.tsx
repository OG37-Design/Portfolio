export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Contact
      </h1>
      <p className="mt-4 max-w-xl text-muted leading-relaxed">
        I'll be happy to answer any questions — reach out directly and I'll
        get back to you.
      </p>

      <dl className="mt-10 max-w-xl divide-y divide-border border-t border-border text-sm">
        <div className="flex items-center justify-between py-4">
          <dt className="text-muted">Email</dt>
          <dd>
            <a
              href="mailto:noelog37@gmail.com"
              className="font-medium hover:text-accent"
            >
              noelog37@gmail.com
            </a>
          </dd>
        </div>
        <div className="flex items-center justify-between py-4">
          <dt className="text-muted">Phone</dt>
          <dd>
            <a href="tel:+13192307226" className="font-medium hover:text-accent">
              319-230-7226
            </a>
          </dd>
        </div>
        <div className="flex items-center justify-between py-4">
          <dt className="text-muted">LinkedIn</dt>
          <dd>
            <a
              href="https://www.linkedin.com/in/noel-o-gonzalez"
              target="_blank"
              rel="noreferrer"
              className="font-medium hover:text-accent"
            >
              linkedin.com/in/noel-o-gonzalez
            </a>
          </dd>
        </div>
        <div className="flex items-center justify-between py-4">
          <dt className="text-muted">Location</dt>
          <dd className="font-medium">Avondale, AZ</dd>
        </div>
      </dl>
    </div>
  );
}
