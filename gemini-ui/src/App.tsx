import React, { useState } from 'react';

import { BookingsScreen } from './screens/BookingsScreen';
import ServiceDetailsScreen from './screens/ServiceDetailsScreen';
import { VehicleDetailsScreen } from './screens/VehicleDetailsScreen';

import {
  ScreenId,
  Vehicle,
  DetailService,
  BookingDetails,
  AiQuoteResult,
} from './types';

import {
  INITIAL_VEHICLES,
  INITIAL_NOTIFICATIONS,
} from './data/mockData';

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
import { BookingConfirmationScreen } from './screens/BookingConfirmationScreen';
import { WarrantyScreen } from './screens/WarrantyScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { AdminDashboardScreen } from './screens/AdminDashboardScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] =
    useState<ScreenId>('login');

  // =====================================================
  // VEHICLES
  // =====================================================

  const [vehicles, setVehicles] = useState<Vehicle[]>(() => {
    const savedVehicles = localStorage.getItem('autotrics_vehicles');

    if (savedVehicles) {
      try {
        return JSON.parse(savedVehicles) as Vehicle[];
      } catch (error) {
        console.error(
          'Failed to load saved vehicles:',
          error
        );
      }
    }

    return INITIAL_VEHICLES;
  });

  const [selectedVehicle, setSelectedVehicle] =
    useState<Vehicle>(INITIAL_VEHICLES[0]);

  // =====================================================
  // SERVICES
  // =====================================================

  const [selectedService, setSelectedService] =
    useState<DetailService | undefined>(undefined);

  // =====================================================
  // CURRENT BOOKING
  // =====================================================

  const [bookingDetails, setBookingDetails] =
    useState<BookingDetails | undefined>(undefined);

  // =====================================================
  // ALL CONFIRMED BOOKINGS
  // =====================================================

  const [bookings, setBookings] =
    useState<BookingDetails[]>(() => {
      const savedBookings =
        localStorage.getItem('autotrics_bookings');

      if (savedBookings) {
        try {
          return JSON.parse(
            savedBookings
          ) as BookingDetails[];
        } catch (error) {
          console.error(
            'Failed to load saved bookings:',
            error
          );
        }
      }

      return [];
    });

  const [aiQuoteResult, setAiQuoteResult] =
    useState<AiQuoteResult | undefined>(undefined);

  const [unreadCount, setUnreadCount] =
    useState(2);

  const [isAdmin, setIsAdmin] =
    useState(false);

  // =====================================================
  // NAVIGATION
  // =====================================================

  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // =====================================================
  // VEHICLE PERSISTENCE
  // =====================================================

  const handleAddVehicle = (newVehicle: Vehicle) => {
    setVehicles((currentVehicles) => {
      const updatedVehicles = [
        newVehicle,
        ...currentVehicles.filter(
          (vehicle) => vehicle.id !== newVehicle.id
        ),
      ];

      localStorage.setItem(
        'autotrics_vehicles',
        JSON.stringify(updatedVehicles)
      );

      return updatedVehicles;
    });

    setSelectedVehicle(newVehicle);
  };

  React.useEffect(() => {
    localStorage.setItem(
      'autotrics_vehicles',
      JSON.stringify(vehicles)
    );
  }, [vehicles]);

  // =====================================================
  // BOOKING SAVE FUNCTION
  // =====================================================

  const saveConfirmedBooking = (
    booking: BookingDetails
  ) => {
    setBookings((currentBookings) => {
      const updatedBookings = [
        booking,
        ...currentBookings.filter(
          (existingBooking) =>
            !(
              existingBooking.date === booking.date &&
              existingBooking.timeSlot === booking.timeSlot &&
              existingBooking.vehicleId === booking.vehicleId
            )
        ),
      ];

      localStorage.setItem(
        'autotrics_bookings',
        JSON.stringify(updatedBookings)
      );

      return updatedBookings;
    });
  };

  React.useEffect(() => {
    localStorage.setItem(
      'autotrics_bookings',
      JSON.stringify(bookings)
    );
  }, [bookings]);

  // =====================================================
  // ADMIN
  // =====================================================

  const handleToggleAdmin = () => {
    if (currentScreen === 'admin') {
      setIsAdmin(false);
      handleNavigate('home');
    } else {
      setIsAdmin(true);
      handleNavigate('admin');
    }
  };

  // =====================================================
  // ACTIVE SCREEN
  // =====================================================

  const renderActiveScreen = () => {
    switch (currentScreen) {

      // -------------------------------------------------
      // SPLASH
      // -------------------------------------------------

      case 'splash':
        return null;

      // -------------------------------------------------
      // ONBOARDING
      // -------------------------------------------------

      case 'onboarding':
        return (
          <OnboardingScreen
            onNavigate={handleNavigate}
          />
        );

      // -------------------------------------------------
      // LOGIN
      // -------------------------------------------------

      case 'login':
        return (
          <LoginScreen
            onNavigate={handleNavigate}
          />
        );

      // -------------------------------------------------
      // OTP
      // -------------------------------------------------

      case 'otp':
        return (
          <OtpScreen
            onNavigate={handleNavigate}
          />
        );

      // -------------------------------------------------
      // HOME
      // -------------------------------------------------

      case 'home':
        return (
          <HomeScreen
            vehicles={vehicles}
            onNavigate={handleNavigate}
            onSelectService={(service) => {
              setSelectedService(service);
            }}
            onSelectVehicle={(vehicle) => {
              setSelectedVehicle(vehicle);
            }}
          />
        );

      // -------------------------------------------------
      // AI QUOTE
      // -------------------------------------------------

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
                price: quote.estimatedPriceINR,
                durationHours: quote.estimatedTimeHours,
                warrantyYears:
                  quote.warrantyCoverageYears,
                category: 'Protection',
                description: quote.aiTechnicianNote,
                imageUrl:
                  'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80',
                popular: true,
                features: quote.recommendedSteps,
              });
            }}
          />
        );

      // -------------------------------------------------
      // ADD VEHICLE
      // -------------------------------------------------

      case 'add-vehicle':
        return (
          <AddVehicleScreen
            onAddVehicle={handleAddVehicle}
            onNavigate={handleNavigate}
          />
        );

      // -------------------------------------------------
      // GARAGE
      // -------------------------------------------------

      case 'garage':
        return (
          <GarageScreen
            vehicles={vehicles}
            onSelectVehicle={(vehicle) => {
              setSelectedVehicle(vehicle);
            }}
            onNavigate={handleNavigate}
          />
        );

      // -------------------------------------------------
      // VEHICLE DETAILS
      // -------------------------------------------------

      case 'vehicle-details':
        if (!selectedVehicle) {
          return (
            <GarageScreen
              vehicles={vehicles}
              onSelectVehicle={(vehicle) => {
                setSelectedVehicle(vehicle);
              }}
              onNavigate={handleNavigate}
            />
          );
        }

        return (
          <VehicleDetailsScreen
            vehicle={selectedVehicle}
            onNavigate={handleNavigate}
          />
        );

      // -------------------------------------------------
      // SERVICE DETAILS
      // -------------------------------------------------

      case 'service-details':
        if (!selectedService) {
          return (
            <HomeScreen
              vehicles={vehicles}
              onNavigate={handleNavigate}
              onSelectService={(service) => {
                setSelectedService(service);
              }}
              onSelectVehicle={(vehicle) => {
                setSelectedVehicle(vehicle);
              }}
            />
          );
        }

        return (
          <ServiceDetailsScreen
            service={selectedService}
            onNavigate={handleNavigate}
            onBookService={() =>
              handleNavigate('booking')
            }
          />
        );

      // -------------------------------------------------
      // BOOKING
      // -------------------------------------------------

      case 'booking':
  return (
    <BookingScreen
      vehicles={vehicles}
      selectedVehicle={selectedVehicle}
      selectedService={selectedService}
      onNavigate={handleNavigate}
            onProceedToPayment={(details) => {
              // Keep booking temporarily in memory
              // until payment succeeds.
              setBookingDetails(details);

              handleNavigate('payment');
            }}
          />
        );

      // -------------------------------------------------
      // PAYMENT
      // -------------------------------------------------

      case 'payment':
        return (
          <PaymentScreen
            bookingDetails={bookingDetails}
            onNavigate={handleNavigate}
            onPaymentSuccess={() => {
              if (bookingDetails) {
                // Save ONLY after successful payment.
                saveConfirmedBooking(
                  bookingDetails
                );
              }

              setUnreadCount(
                (previous) => previous + 1
              );

              handleNavigate(
                'booking-confirmation'
              );
            }}
          />
        );

      // -------------------------------------------------
      // BOOKING CONFIRMATION
      // -------------------------------------------------

      case 'booking-confirmation':
        if (!bookingDetails) {
          handleNavigate('home');
          return null;
        }

        return (
          <BookingConfirmationScreen
            bookingDetails={bookingDetails}
            onNavigate={handleNavigate}
          />
        );

      // -------------------------------------------------
      // MY BOOKINGS
      // -------------------------------------------------

      case 'bookings':
        return (
          <BookingsScreen
            bookings={bookings}
            vehicles={vehicles}
            onNavigate={handleNavigate}
          />
        );

      // -------------------------------------------------
      // WARRANTY
      // -------------------------------------------------

      case 'warranty':
        return (
          <WarrantyScreen
            onNavigate={handleNavigate}
          />
        );

      // -------------------------------------------------
      // PROFILE
      // -------------------------------------------------

      case 'profile':
        return (
          <ProfileScreen
            vehicles={vehicles}
            onNavigate={handleNavigate}
          />
        );

      // -------------------------------------------------
      // SETTINGS
      // -------------------------------------------------

      case 'settings':
        return (
          <SettingsScreen
            onNavigate={handleNavigate}
          />
        );

      // -------------------------------------------------
      // NOTIFICATIONS
      // -------------------------------------------------

      case 'notifications':
        return (
          <NotificationsScreen
            notifications={INITIAL_NOTIFICATIONS}
            onMarkAllRead={() => {
              setUnreadCount(0);
            }}
            onNavigate={handleNavigate}
          />
        );

      // -------------------------------------------------
      // ADMIN
      // -------------------------------------------------

      case 'admin':
        return (
          <AdminDashboardScreen
            onNavigate={handleNavigate}
          />
        );

      // -------------------------------------------------
      // FALLBACK
      // -------------------------------------------------

      default:
        return (
          <HomeScreen
            vehicles={vehicles}
            onNavigate={handleNavigate}
            onSelectService={(service) => {
              setSelectedService(service);
            }}
            onSelectVehicle={(vehicle) => {
              setSelectedVehicle(vehicle);
            }}
          />
        );
    }
  };

  // =====================================================
  // APP UI
  // =====================================================

  return (
    <MobileFrame
      currentScreen={currentScreen}
      onNavigate={handleNavigate}
    >
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