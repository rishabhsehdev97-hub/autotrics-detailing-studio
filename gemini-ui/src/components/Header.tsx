import React from 'react';
import { Shield, Bell, Sparkles, ChevronLeft, Wrench, Menu } from 'lucide-react';
import { ScreenId } from '../types';

interface HeaderProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  unreadCount: number;
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  unreadCount,
  isAdmin,
  onToggleAdmin,
}) => {
  const isHome = currentScreen === 'home';
  const showBack = !isHome && currentScreen !== 'splash' && currentScreen !== 'onboarding';

  const getScreenTitle = (screen: ScreenId) => {
    switch (screen) {
      case 'home': return 'AUTOTRICS';
      case 'ai-quote': return 'AI Diagnostics & Quote';
      case 'add-vehicle': return 'Add Vehicle to Garage';
      case 'garage': return 'Studio Garage';
      case 'booking': return 'Book Detailing Concierge';
      case 'payment': return 'Secure Payment';
      case 'warranty': return 'Digital Warranty Vault';
      case 'profile': return 'VIP Member Profile';
      case 'settings': return 'Studio Preferences';
      case 'notifications': return 'Studio Notifications';
      case 'admin': return 'Studio Master Dashboard';
      
      case 'otp': return 'Verify Access';
      default: return 'AUTOTRICS';
    }
  };

  if (currentScreen === 'splash' || currentScreen === 'onboarding') {
    return null;
  }

  return null;
  };

    