
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/Lib/supabase";

type Company = {
  id: string;
  name: string;
};

export default function WriteReviewPage() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [companyId, setCompanyId] = useState("");
  const [rating, setRating] = useState("5");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    async function loadCompanies() {
      const { data, error } = await supabase
        .from("companies")
        .select("id, name")
        .order("name");

      if (error) {
        setMessage(error.message);
        return;
      }

      setCompanies(data || []);
    }

    loadCompanies();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      setMessage("Please sign in before submitting a review.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("reviews").insert({
      company_id: companyId,
      user_id: user.id,
      rating: Number(rating),
      title: title.trim(),
      body: body.trim(),
      status: "pending",
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Your review has been submitted and is awaiting approval.");
      setTitle("");
      setBody("");
      setRating("5");
    }

    setLoading(false);
  }

  return (
    <main className="section">
      <div className="wrap">
        <h1>Write a review</h1>
        <p className="sub">
          Share your honest experience with a company.
        </p>

        <form className="card" onSubmit={handleSubmit}>
          <label>Choose a company</label>
          <select
            value={companyId}
            onChange={(e) => setCompanyId(e.target.value)}
            required
          >
            <option value="">Select a company</option>
            {companies.map((company) => (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            ))}
          </select>

          <label>Rating</label>
          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="5">5 stars - Excellent</option>
            <option value="4">4 stars - Very good</option>
            <option value="3">3 stars - Average</option>
            <option value="2">2 stars - Poor</option>
            <option value="1">1 star - Very poor</option>
          </select>

          <label>Review title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your review a title"
            maxLength={120}
            required
          />

          <label>Describe your experience</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Tell others about your experience..."
            minLength={10}
            maxLength={5000}
            rows={6}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit review"}
          </button>

          {message && <p>{message}</p>}
        </form>

        <p>
          Not signed in? <Link href="/login">Sign in</Link> or{" "}
          <Link href="/signup">create an account</Link>.
        </p>
      </div>
    </main>
  );
}
