import { logoCloudTitle, logos } from "@/data/home";

export function LogoCloud() {
  return (
    <section aria-labelledby="logos-title" className="py-14 sm:py-16">
      <div className="container-page">
        <h2 id="logos-title" className="text-center text-sm font-medium text-muted-foreground">
          {logoCloudTitle}
        </h2>
        <ul className="mt-8 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
          {logos.map(({ name, icon: Icon }) => (
            <li
              key={name}
              className="flex items-center justify-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="size-5" strokeWidth={2.25} aria-hidden="true" />
              <span className="text-lg font-semibold tracking-tight">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
