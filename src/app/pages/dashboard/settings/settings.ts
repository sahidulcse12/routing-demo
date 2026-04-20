import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <div class="settings-container">
      <h2>Dashboard Settings</h2>
      <p>Manage your account preferences and application settings.</p>
      
      <form class="settings-form">
        <div class="form-group">
          <label>Email Notifications</label>
          <input type="checkbox" checked>
        </div>
        <div class="form-group">
          <label>Dark Mode</label>
          <input type="checkbox" checked>
        </div>
        <button type="button" class="save-btn">Save Changes</button>
      </form>
    </div>
  `,
  styles: [`
    .settings-container {
      padding: 20px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12px;
    }
    .settings-form {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .form-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 6px;
    }
    .save-btn {
      padding: 10px 20px;
      background: #646cff;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      align-self: flex-start;
      transition: background 0.3s;
    }
    .save-btn:hover {
      background: #535bf2;
    }
  `]
})
export class Settings {}
