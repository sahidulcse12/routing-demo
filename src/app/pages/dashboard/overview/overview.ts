import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: true,
  template: `
    <div class="overview-container">
      <h2>Dashboard Overview</h2>
      <p>Welcome to your dashboard. Here is a summary of your activity.</p>
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Total Views</h3>
          <p class="stat-value">1,234</p>
        </div>
        <div class="stat-card">
          <h3>Active Users</h3>
          <p class="stat-value">56</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .overview-container {
      padding: 20px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
      backdrop-filter: blur(10px);
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .stat-card {
      background: rgba(255, 255, 255, 0.1);
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .stat-value {
      font-size: 2rem;
      font-weight: bold;
      color: #646cff;
      margin: 10px 0 0;
    }
  `]
})
export class Overview {}
