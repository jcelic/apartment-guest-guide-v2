const StayInfo = () => {
  return (
    <dl className="grid grid-cols-3 rounded-3xl border border-line bg-surface px-3 py-5 text-center shadow-card">
      <div className="px-2">
        <dt className="text-xs font-bold tracking-wider text-muted uppercase">
          Check-in
        </dt>
        <dd className="mt-1 text-2xl font-extrabold text-foreground">14:00</dd>
      </div>

      <div className="border-x border-line px-2">
        <dt className="text-xs font-bold tracking-wider text-muted uppercase">
          Check-out
        </dt>
        <dd className="mt-1 text-2xl font-extrabold text-foreground">10:00</dd>
      </div>

      <div className="px-2">
        <dt className="text-xs font-bold tracking-wider text-muted uppercase">
          Floor
        </dt>
        <dd className="mt-1 text-2xl font-extrabold text-foreground">3rd</dd>
      </div>
    </dl>
  );
};

export default StayInfo;
