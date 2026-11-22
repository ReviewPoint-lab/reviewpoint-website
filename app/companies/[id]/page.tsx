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

        <section style={{ marginTop: 32 }}>
          <h2>Customer reviews</h2>
          <p className="sub">
            Customer experiences and feedback will appear here.
          </p>

          <div className="card">
            <h3>No customer reviews yet</h3>
            <p>
              Be the first to share your experience with {company.name}.
            </p>
            <Link className="button" href="/write-review">
              Write a review
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
