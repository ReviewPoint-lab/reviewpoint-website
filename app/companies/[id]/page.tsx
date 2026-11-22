import Link from "next/link";
import { notFound } from "next/navigation";
import { companies } from "@/lib/demo";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CompanyPage({ params }: Props) {
  const { id } = await params;
  const company = companies.find((item) => item.id === id);

  if (!company) notFound();

  return (
    <main className="section">
      <div className="wrap">
        <Link className="link" href="/companies">
          ← Back to companies
        </Link>

        <div className="card" style={{ marginTop: 20 }}>
          <div className="company-top">
            <div className="company-logo">{company.initials}</div>
            <div>
              <h1 className="company-name">{company.name}</h1>
              <div className="category">{company.category}</div>
            </div>
          </div>

          <div className="rating-row">
            <span className="stars">★★★★★</span>
            <span className="score">{company.rating.toFixed(1)}</span>
            <span>{company.count} sample reviews</span>
          </div>

          <p className="card-note">{company.description}</p>

          <p>
            Demo profile: this listing and its rating are illustrative sample
            data, not verified customer feedback.
          </p>
        </div>
      </div>
    </main>
  );
}
