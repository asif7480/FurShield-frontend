// import React, { useEffect, useState } from "react";
// import Layout from "../../components/dashboard/Layout";
// import "./Dashboard.css";

// export default function Dashboard() {
//   const [progress, setProgress] = useState({
//     users: 0,
//     products: 0,
//     orders: 0,
//     pets: 0,
//   });
//   useEffect(() => {
//     setTimeout(() => {
//       setProgress({
//         users: 120,
//         products: 45,
//         orders: 78,
//         pets: 32,
//       });
//     }, 300);
//   }, []);

//   return (
//     <Layout>
//       <h3 className="fw-bold mb-4 dashboard-title">Welcome Admin 👋</h3>
//       <div className="row g-3">
//         <div className="col-md-3 col-6">
//           <div className="card stat-card text-center">
//             <h5>Users</h5>
//             <p className="fw-bold fs-4">{progress.users}</p>
//           </div>
//         </div>
//         <div className="col-md-3 col-6">
//           <div className="card stat-card text-center">
//             <h5>Products</h5>
//             <p className="fw-bold fs-4">{progress.products}</p>
//           </div>
//         </div>
//         <div className="col-md-3 col-6">
//           <div className="card stat-card text-center">
//             <h5>Orders</h5>
//             <p className="fw-bold fs-4">{progress.orders}</p>
//           </div>
//         </div>
//         <div className="col-md-3 col-6">
//           <div className="card stat-card text-center">
//             <h5>Pets</h5>
//             <p className="fw-bold fs-4">{progress.pets}</p>
//           </div>
//         </div>
//       </div>

//       <div className="chart-container mt-5">
//         <h4 className="mb-3">Overview</h4>
//         <div className="bar-chart">
//           <div className="bar">
//             <span>Users</span>
//             <div
//               className="bar-fill users"
//               style={{ height: `${progress.users / 2}%` }}
//             ></div>
//           </div>
//           <div className="bar">
//             <span>Products</span>
//             <div
//               className="bar-fill products"
//               style={{ height: `${progress.products * 2}%` }}
//             ></div>
//           </div>
//           <div className="bar">
//             <span>Orders</span>
//             <div
//               className="bar-fill orders"
//               style={{ height: `${progress.orders * 1.5}%` }}
//             ></div>
//           </div>
//           <div className="bar">
//             <span>Pets</span>
//             <div
//               className="bar-fill pets"
//               style={{ height: `${progress.pets * 3}%` }}
//             ></div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }


import React, { useEffect, useState } from "react";
import Layout from "../../components/dashboard/Layout";
import "./Dashboard.css";

/**
 * Small CountUp hook for smooth number animation
 */
function useCountUp(target, duration = 900) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    let rafId = null;

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const curr = Math.floor(progress * (target - start) + start);
      setValue(curr);
      if (progress < 1) rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration]);
  return value;
}

export default function Dashboard() {
  // final values (could come from API)
  const final = { users: 120, products: 45, orders: 78, pets: 32 };

  // set animateTargets after mount to trigger CSS transitions
  const [animateTargets, setAnimateTargets] = useState({
    users: 0,
    products: 0,
    orders: 0,
    pets: 0,
  });

  useEffect(() => {
    // small timeout so CSS transitions animate from 0
    const t = setTimeout(() => setAnimateTargets(final), 120);
    return () => clearTimeout(t);
  }, []);

  // count up values
  const usersCount = useCountUp(animateTargets.users, 900);
  const productsCount = useCountUp(animateTargets.products, 900);
  const ordersCount = useCountUp(animateTargets.orders, 900);
  const petsCount = useCountUp(animateTargets.pets, 900);

  // helper to compute bar-height percent (clamped)
  const toPct = (val, max = 150) => Math.min(Math.round((val / max) * 100), 100);

  return (
    <Layout>
      <div className="dashboard-wrap">
        <header className="dash-header">
          <h3 className="dashboard-title">Welcome Admin 👋</h3>
          <p className="dashboard-sub">Overview of the system — quick stats & charts</p>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-top">
              <div className="stat-icon users-icon" aria-hidden />
              <div className="stat-meta">
                <small>Users</small>
                <span className="stat-number">{usersCount}</span>
              </div>
            </div>
            <div className="stat-foot">Active users registered</div>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <div className="stat-icon products-icon" aria-hidden />
              <div className="stat-meta">
                <small>Products</small>
                <span className="stat-number">{productsCount}</span>
              </div>
            </div>
            <div className="stat-foot">Items in catalogue</div>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <div className="stat-icon orders-icon" aria-hidden />
              <div className="stat-meta">
                <small>Orders</small>
                <span className="stat-number">{ordersCount}</span>
              </div>
            </div>
            <div className="stat-foot">Processed / pending orders</div>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <div className="stat-icon pets-icon" aria-hidden />
              <div className="stat-meta">
                <small>Pets</small>
                <span className="stat-number">{petsCount}</span>
              </div>
            </div>
            <div className="stat-foot">Registered pets</div>
          </div>
        </section>

        <section className="overview">
          <div className="overview-head">
            <h4>Overview</h4>
            <div className="legend">
              <span><i className="dot users-dot" /> Users</span>
              <span><i className="dot products-dot" /> Products</span>
              <span><i className="dot orders-dot" /> Orders</span>
              <span><i className="dot pets-dot" /> Pets</span>
            </div>
          </div>

          <div className="chart-area">
            <div className="bar-chart" role="img" aria-label="overview bar chart">
              <div className="bar">
                <div
                  className="bar-fill users"
                  style={{ height: `${toPct(animateTargets.users, 200)}%` }}
                />
                <span className="bar-label">Users</span>
                <div className="bar-value">{usersCount}</div>
              </div>

              <div className="bar">
                <div
                  className="bar-fill products"
                  style={{ height: `${toPct(animateTargets.products, 200)}%` }}
                />
                <span className="bar-label">Products</span>
                <div className="bar-value">{productsCount}</div>
              </div>

              <div className="bar">
                <div
                  className="bar-fill orders"
                  style={{ height: `${toPct(animateTargets.orders, 200)}%` }}
                />
                <span className="bar-label">Orders</span>
                <div className="bar-value">{ordersCount}</div>
              </div>

              <div className="bar">
                <div
                  className="bar-fill pets"
                  style={{ height: `${toPct(animateTargets.pets, 200)}%` }}
                />
                <span className="bar-label">Pets</span>
                <div className="bar-value">{petsCount}</div>
              </div>
            </div>

            <div className="insights">
              <h5>Quick Insights</h5>
              <ul>
                <li>Top performing category: <strong>Products</strong></li>
                <li>Recent signup spike detected</li>
                <li>Orders conversion improving week-on-week</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
