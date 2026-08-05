import React, { useState } from 'react';
import { ScreenId, Vehicle, DetailService, BookingDetails, AiQuoteResult } from './types';
import { INITIAL_VEHICLES, INITIAL_NOTIFICATIONS } from './data/mockData';

import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { MobileFrame } from './components/MobileFrame';

import { SplashScreen } from './screens/SplashScreen';
import { OnboardingScreen } from './screens/OnboardingScreen';
import { LoginScreen } from './screens/LoginScreen';
import { OtpScreen } from './screens/OtpScreen';
import { HomeScreen } from './screens/HomeScreen';
import { AiQuoteScreen } from './screens/AiQuoteScreen';
import { AddVehicleScreen } from './screens/AddVehicleScreen';
import { GarageScreen } from './screens/GarageScreen';
import { BookingScreen } from './screens/BookingScreen';
import { PaymentScreen } from './screens/PaymentScreen';
import { WarrantyScreen } from './screens/WarrantyScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { AdminDashboardScreen } from './screens/AdminDashboardScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [vehicles, setVehicles] = useState<Vehicle[]>(INITIAL_VEHICLES);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(INITIAL_VEHICLES[0]);
  const [selectedService, setSelectedService] = useState<DetailService | undefined>(undefined);
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | undefined>(undefined);
  const [aiQuoteResult, setAiQuoteResult] = useState<AiQuoteResult | undefined>(undefined);
  const [unreadCount, setUnreadCount] = useState<number>(2);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddVehicle = (newVehicle: Vehicle) => {
    setVehicles([newVehicle, ...vehicles]);
    setSelectedVehicle(newVehicle);
  };

  const handleToggleAdmin = () => {
    if (currentScreen === 'admin') {
      setIsAdmin(false);
      handleNavigate('home');
    } else {
      setIsAdmin(true);
      handleNavigate('admin');
    }
  };

  const renderActiveScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onNavigate={handleNavigate} />;
      
      case 'onboarding':
        return <OnboardingScreen onNavigate={handleNavigate} />;

      case 'login':
        return <LoginScreen onNavigate={handleNavigate} />;

      case 'otp':
        return <OtpScreen onNavigate={handleNavigate} />;

      case 'home':
        return (
          <HomeScreen
            vehicles={vehicles}
            onNavigate={handleNavigate}
            onSelectService={(serv) => setSelectedService(serv)}
            onSelectVehicle={(veh) => setSelectedVehicle(veh)}
          />
        );

      case 'ai-quote':
        return (
          <AiQuoteScreen
            vehicles={vehicles}
            onNavigate={handleNavigate}
            onApplyAiQuote={(quote) => {
              setAiQuoteResult(quote);
              setSelectedService({
                id: 'serv-ai-custom',
                name: quote.recommendedPackageName,
                tagline: quote.surfaceDefectAnalysis,
                price: quote.estimatedPriceUSD,
                durationHours: quote.estimatedTimeHours,
                warrantyYears: quote.warrantyCoverageYears,
                category: 'Protection',
                description: quote.aiTechnicianNote,
                imageUrl: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80',
                popular: true,
                features: quote.recommendedSteps,
              });
            }}
          />
        );

      case 'add-vehicle':
        return (
          <AddVehicleScreen
            onAddVehicle={handleAddVehicle}
            onNavigate={handleNavigate}
          />
        );

      case 'garage':
        return (
          <GarageScreen
            vehicles={vehicles}
            onSelectVehicle={(veh) => setSelectedVehicle(veh)}
            onNavigate={handleNavigate}
          />
        );

      case 'booking':
        return (
          <BookingScreen
            vehicles={vehicles}
            selectedService={selectedService}
            onNavigate={handleNavigate}
            onProceedToPayment={(details) => setBookingDetails(details)}
          />
        );

      case 'payment':
        return (
          <PaymentScreen
            bookingDetails={bookingDetails}
            onNavigate={handleNavigate}
            onPaymentSuccess={() => setUnreadCount(prev => prev + 1)}
          />
        );

      case 'warranty':
        return <WarrantyScreen onNavigate={handleNavigate} />;

      case 'profile':
        return <ProfileScreen onNavigate={handleNavigate} />;

      case 'settings':
        return <SettingsScreen onNavigate={handleNavigate} />;

      case 'notifications':
        return (
          <NotificationsScreen
            notifications={INITIAL_NOTIFICATIONS}
            onMarkAllRead={() => setUnreadCount(0)}
            onNavigate={handleNavigate}
          />
        );

      case 'admin':
        return <AdminDashboardScreen onNavigate={handleNavigate} />;

      default:
        return (
          <HomeScreen
            vehicles={vehicles}
            onNavigate={handleNavigate}
            onSelectService={(serv) => setSelectedService(serv)}
            onSelectVehicle={(veh) => setSelectedVehicle(veh)}
          />
        );
    }
  };

  return (
    <MobileFrame currentScreen={currentScreen} onNavigate={handleNavigate}>
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        unreadCount={unreadCount}
        isAdmin={isAdmin}
        onToggleAdmin={handleToggleAdmin}
      />

      <main className="w-full">
        {renderActiveScreen()}
      </main>

      <BottomNav
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
      />
    </MobileFrame>
  );
}
