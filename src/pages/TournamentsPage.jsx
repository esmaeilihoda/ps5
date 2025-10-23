import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Trophy,
  Calendar,
  Users,
  DollarSign,
  Filter,
  Search,
  Clock,
  Target,
  Zap,
  Star
} from 'lucide-react';
import Navbar from '../components/Navbar';
import '../styles/TournamentsPage.css';

const TournamentsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', label: 'All Tournaments' },
    { id: 'open', label: 'Open' },
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'live', label: 'Live' },
    { id: 'completed', label: 'Completed' }
  ];

  const tournaments = [
    {
      id: 1,
      game: 'FIFA 24 Champions League',
      status: 'open',
      date: 'Oct 25, 2025',
      time: '18:00 UTC',
      prize: '$50,000',
      players: 2547,
      maxPlayers: 3000,
      entry: '$25',
      tier: 'Premium',
      region: 'Global'
    },
    {
      id: 2,
      game: 'Warzone Battle Royale',
      status: 'live',
      date: 'Oct 20, 2025',
      time: '20:00 UTC',
      prize: '$75,000',
      players: 4876,
      maxPlayers: 5000,
      entry: '$35',
      tier: 'Elite',
      region: 'Global'
    },
    {
      id: 3,
      game: 'NBA 2K Pro League',
      status: 'upcoming',
      date: 'Nov 2, 2025',
      time: '19:00 UTC',
      prize: '$35,000',
      players: 1876,
      maxPlayers: 2500,
      entry: '$20',
      tier: 'Standard',
      region: 'NA/EU'
    },
    {
      id: 4,
      game: 'Mortal Kombat Tournament',
      status: 'open',
      date: 'Oct 28, 2025',
      time: '21:00 UTC',
      prize: '$25,000',
      players: 987,
      maxPlayers: 1500,
      entry: '$15',
      tier: 'Standard',
      region: 'Global'
    },
    {
      id: 5,
      game: 'Gran Turismo Championship',
      status: 'upcoming',
      date: 'Nov 5, 2025',
      time: '17:00 UTC',
      prize: '$40,000',
      players: 1543,
      maxPlayers: 2000,
      entry: '$30',
      tier: 'Premium',
      region: 'Global'
    },
    {
      id: 6,
      game: 'Street Fighter Masters',
      status: 'open',
      date: 'Oct 30, 2025',
      time: '22:00 UTC',
      prize: '$30,000',
      players: 1234,
      maxPlayers: 2000,
      entry: '$25',
      tier: 'Premium',
      region: 'Asia/Pacific'
    }
  ];

  const filteredTournaments = tournaments.filter(tournament => {
    const matchesFilter = selectedFilter === 'all' || tournament.status === selectedFilter;
    const matchesSearch = tournament.game.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'live':
        return 'status-live';
      case 'open':
        return 'status-open';
      case 'upcoming':
        return 'status-upcoming';
      case 'completed':
        return 'status-completed';
      default:
        return '';
    }
  };

  return (
    <div className="tournaments-page">
      <Navbar />

      <section className="tournaments-hero">
        <div className="hero-bg-pattern"></div>
        <div className="tournaments-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-badge">
              <Trophy size={20} />
              <span>Compete & Win</span>
            </div>
            <h1 className="tournaments-hero-title">
              Tournament <span className="text-gradient">Arena</span>
            </h1>
            <p className="tournaments-hero-description">
              Browse and join competitive PS5 tournaments across all major titles
            </p>
          </motion.div>
        </div>
      </section>

      <section className="tournaments-main">
        <div className="tournaments-container">
          <div className="tournaments-controls">
            <div className="search-bar">
              <Search size={20} />
              <input
                type="text"
                placeholder="Search tournaments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="filter-tabs">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`filter-tab ${selectedFilter === filter.id ? 'active' : ''}`}
                  onClick={() => setSelectedFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="tournaments-grid">
            {filteredTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                className="tournament-card-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="tournament-card-header">
                  <div className={`tournament-status ${getStatusColor(tournament.status)}`}>
                    {tournament.status === 'live' && <span className="status-dot-pulse"></span>}
                    {tournament.status.toUpperCase()}
                  </div>
                  <div className="tournament-tier">
                    <Star size={14} />
                    {tournament.tier}
                  </div>
                </div>

                <h3 className="tournament-card-title">{tournament.game}</h3>

                <div className="tournament-card-stats">
                  <div className="stat-row">
                    <div className="stat-item-inline">
                      <Calendar size={16} />
                      <span>{tournament.date}</span>
                    </div>
                    <div className="stat-item-inline">
                      <Clock size={16} />
                      <span>{tournament.time}</span>
                    </div>
                  </div>

                  <div className="stat-row">
                    <div className="stat-item-inline">
                      <Users size={16} />
                      <span>{tournament.players}/{tournament.maxPlayers} Players</span>
                    </div>
                    <div className="stat-item-inline region">
                      <Target size={16} />
                      <span>{tournament.region}</span>
                    </div>
                  </div>
                </div>

                <div className="tournament-progress-section">
                  <div className="progress-bar-full">
                    <div
                      className="progress-fill-full"
                      style={{ width: `${(tournament.players / tournament.maxPlayers) * 100}%` }}
                    ></div>
                  </div>
                  <div className="progress-info">
                    <span>{Math.round((tournament.players / tournament.maxPlayers) * 100)}% Full</span>
                    <span>{tournament.maxPlayers - tournament.players} spots left</span>
                  </div>
                </div>

                <div className="tournament-card-footer">
                  <div className="prize-pool">
                    <Trophy size={20} />
                    <div>
                      <div className="prize-label">Prize Pool</div>
                      <div className="prize-amount">{tournament.prize}</div>
                    </div>
                  </div>
                  <div className="entry-section">
                    <div className="entry-price">{tournament.entry}</div>
                    <button className="join-tournament-btn">
                      <Zap size={18} />
                      Join Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTournaments.length === 0 && (
            <div className="no-results">
              <Filter size={48} />
              <h3>No tournaments found</h3>
              <p>Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TournamentsPage;
