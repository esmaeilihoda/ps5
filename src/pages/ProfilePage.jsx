import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Trophy,
  TrendingUp,
  Calendar,
  DollarSign,
  Award,
  Target,
  Zap,
  Crown,
  Settings,
  Wallet,
  History
} from 'lucide-react';
import Navbar from '../components/Navbar';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'tournaments', label: 'Tournaments', icon: Trophy },
    { id: 'transactions', label: 'Transactions', icon: DollarSign }
  ];

  const userProfile = {
    name: 'ProGamer_Elite',
    avatar: '🎮',
    level: 'Diamond',
    rank: 42,
    totalEarnings: '$78,450',
    winRate: 72,
    tournaments: 95,
    wins: 68,
    losses: 27
  };

  const walletBalances = [
    { currency: 'USD', amount: '$1,234.50', icon: DollarSign },
    { currency: 'Rial', amount: '۵۲,۱۰۰,۰۰۰', icon: DollarSign },
    { currency: 'USDT', amount: '0.5432', icon: DollarSign }
  ];

  const recentTournaments = [
    {
      id: 1,
      game: 'FIFA 24 Champions',
      date: 'Oct 15, 2025',
      placement: '1st',
      prize: '$5,000',
      status: 'won'
    },
    {
      id: 2,
      game: 'Warzone Battle',
      date: 'Oct 12, 2025',
      placement: '3rd',
      prize: '$1,500',
      status: 'won'
    },
    {
      id: 3,
      game: 'NBA 2K League',
      date: 'Oct 8, 2025',
      placement: '5th',
      prize: '$800',
      status: 'won'
    },
    {
      id: 4,
      game: 'Street Fighter',
      date: 'Oct 5, 2025',
      placement: '12th',
      prize: '$0',
      status: 'lost'
    }
  ];

  const recentTransactions = [
    {
      id: 1,
      type: 'Prize',
      description: 'FIFA 24 Champions - 1st Place',
      amount: '+$5,000',
      date: 'Oct 15, 2025',
      status: 'completed'
    },
    {
      id: 2,
      type: 'Entry',
      description: 'Warzone Tournament Entry',
      amount: '-$35',
      date: 'Oct 12, 2025',
      status: 'completed'
    },
    {
      id: 3,
      type: 'Deposit',
      description: 'Wallet Deposit',
      amount: '+$500',
      date: 'Oct 10, 2025',
      status: 'completed'
    },
    {
      id: 4,
      type: 'Withdrawal',
      description: 'Bank Transfer',
      amount: '-$2,000',
      date: 'Oct 8, 2025',
      status: 'pending'
    }
  ];

  const achievements = [
    { icon: Crown, title: 'Champion', description: 'Won 50+ tournaments' },
    { icon: Trophy, title: 'Elite Player', description: 'Reached Diamond tier' },
    { icon: Zap, title: 'Streak Master', description: '10 consecutive wins' },
    { icon: Award, title: 'Top Earner', description: 'Earned $50K+' }
  ];

  return (
    <div className="profile-page">
      <Navbar />

      <section className="profile-hero">
        <div className="profile-hero-bg"></div>
        <div className="profile-hero-content">
          <motion.div
            className="profile-card-main"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-header">
              <div className="profile-avatar-large">
                <div className="avatar-glow-profile"></div>
                <span>{userProfile.avatar}</span>
              </div>
              <div className="profile-info-header">
                <h1 className="profile-name">{userProfile.name}</h1>
                <div className="profile-meta">
                  <div className="profile-level">
                    <Crown size={16} />
                    <span>{userProfile.level}</span>
                  </div>
                  <div className="profile-rank">
                    Global Rank #{userProfile.rank}
                  </div>
                </div>
              </div>
              <button className="settings-btn">
                <Settings size={20} />
              </button>
            </div>

            <div className="profile-stats-grid">
              <div className="profile-stat-card">
                <DollarSign size={24} className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-value-profile">{userProfile.totalEarnings}</div>
                  <div className="stat-label-profile">Total Earnings</div>
                </div>
              </div>

              <div className="profile-stat-card">
                <Target size={24} className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-value-profile">{userProfile.winRate}%</div>
                  <div className="stat-label-profile">Win Rate</div>
                </div>
              </div>

              <div className="profile-stat-card">
                <Trophy size={24} className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-value-profile">{userProfile.tournaments}</div>
                  <div className="stat-label-profile">Tournaments</div>
                </div>
              </div>

              <div className="profile-stat-card">
                <TrendingUp size={24} className="stat-icon" />
                <div className="stat-content">
                  <div className="stat-value-profile">{userProfile.wins}W/{userProfile.losses}L</div>
                  <div className="stat-label-profile">Record</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="profile-content">
        <div className="profile-container">
          <div className="profile-sidebar">
            <div className="wallet-section">
              <div className="section-title-small">
                <Wallet size={20} />
                <span>Wallet Balances</span>
              </div>

              <div className="wallet-cards">
                {walletBalances.map((balance, index) => (
                  <motion.div
                    key={balance.currency}
                    className="wallet-card"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="wallet-currency">{balance.currency}</div>
                    <div className="wallet-amount">{balance.amount}</div>
                  </motion.div>
                ))}
              </div>

              <button className="wallet-action-btn">
                <DollarSign size={18} />
                Manage Wallet
              </button>
            </div>

            <div className="achievements-section">
              <div className="section-title-small">
                <Award size={20} />
                <span>Achievements</span>
              </div>

              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="achievement-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <achievement.icon size={32} className="achievement-icon" />
                    <div className="achievement-info">
                      <div className="achievement-title">{achievement.title}</div>
                      <div className="achievement-description">{achievement.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="profile-main">
            <div className="tabs-navigation">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <tab.icon size={20} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="tab-content">
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="content-section">
                    <h3 className="content-title">Performance Overview</h3>
                    <div className="performance-chart">
                      <div className="chart-placeholder">
                        <TrendingUp size={48} />
                        <p>Performance chart coming soon</p>
                      </div>
                    </div>
                  </div>

                  <div className="content-section">
                    <h3 className="content-title">Recent Activity</h3>
                    <div className="activity-list">
                      {recentTournaments.slice(0, 3).map((tournament) => (
                        <div key={tournament.id} className="activity-item">
                          <Trophy size={20} />
                          <div className="activity-info">
                            <div className="activity-title">{tournament.game}</div>
                            <div className="activity-meta">
                              {tournament.date} • {tournament.placement} Place
                            </div>
                          </div>
                          <div className={`activity-prize ${tournament.status}`}>
                            {tournament.prize}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'tournaments' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="content-section">
                    <h3 className="content-title">Tournament History</h3>
                    <div className="tournaments-list">
                      {recentTournaments.map((tournament) => (
                        <div key={tournament.id} className="tournament-history-card">
                          <div className="tournament-history-header">
                            <div className="tournament-history-game">{tournament.game}</div>
                            <div className={`tournament-history-status ${tournament.status}`}>
                              {tournament.status === 'won' ? 'Won' : 'Lost'}
                            </div>
                          </div>
                          <div className="tournament-history-details">
                            <div className="history-detail">
                              <Calendar size={16} />
                              <span>{tournament.date}</span>
                            </div>
                            <div className="history-detail">
                              <Award size={16} />
                              <span>{tournament.placement} Place</span>
                            </div>
                            <div className="history-detail prize">
                              <Trophy size={16} />
                              <span>{tournament.prize}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'transactions' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="content-section">
                    <h3 className="content-title">Transaction History</h3>
                    <div className="transactions-list">
                      {recentTransactions.map((transaction) => (
                        <div key={transaction.id} className="transaction-card">
                          <div className="transaction-icon">
                            <History size={20} />
                          </div>
                          <div className="transaction-info">
                            <div className="transaction-type">{transaction.type}</div>
                            <div className="transaction-description">{transaction.description}</div>
                            <div className="transaction-date">{transaction.date}</div>
                          </div>
                          <div className="transaction-right">
                            <div className={`transaction-amount ${transaction.amount.startsWith('+') ? 'positive' : 'negative'}`}>
                              {transaction.amount}
                            </div>
                            <div className={`transaction-status status-${transaction.status}`}>
                              {transaction.status}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
