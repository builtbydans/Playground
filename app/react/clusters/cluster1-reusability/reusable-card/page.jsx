"use client";

import React from "react";
import Grid from "./components/Grid";
import Card from "./components/Card";

export default function Page() {
  const products = [
    { id: 1, name: "Espresso Cup", price: 12.99, stock: 5 },
    { id: 2, name: "Notebook", price: 6.49, stock: 0 },
    { id: 3, name: "Tote Bag", price: 14.99, stock: 22 },
    { id: 4, name: "Desk Lamp", price: 29.99, stock: 7 },
  ];

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Cluster 1 – Reusable Card/Grid</h1>
      <p>Exploring reusable headless layout logic.</p>

      <Grid data={products} columns={3}>
        {(item) => (
          <Card key={item.id}>
            <h3>{item.name}</h3>
            <p>£{item.price}</p>
            <p
              style={{
                color: item.stock > 0 ? "green" : "red",
                fontWeight: 600,
              }}
            >
              {item.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
          </Card>
        )}
      </Grid>
    </main>
  );
}
