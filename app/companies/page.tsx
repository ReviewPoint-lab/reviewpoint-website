
import Link from "next/link";
import { companies } from "@/lib/demo";

export default function CompaniesPage() {
  return (
    <main className="section">
      <div className="wrap">
        <h1>Explore companies</h1>
        <p className="sub">
          Discover businesses and customer experiences.
        </p>

        <div className="grid">
          {companies.map((company) => (
            <Link
              className="card"
              href={`/companies/${company.id}`}
              key={company.id}
            >
              <div className="company-top">
                <div className="company-logo">
                  {company.initials}
                </div>
                <div>
                  <div className="company-name">{company.name}</div>
                  <div className="category">{company.category}</div>
                </div>
              </div>

              <div className="rating-row">
                <span className="stars">★★★★★</span>
                <span className="score">
                  {company.rating.toFixed(1)}
                </span>
              </div>

              <p className="card-note">{company.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
