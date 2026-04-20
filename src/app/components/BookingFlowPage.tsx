import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Plane, Calendar, Check, ChevronLeft, ChevronRight, Info, User, Mail, Phone, MapPin, X } from "lucide-react";

interface SearchParams {
  from: string;
  to: string;
  departDate: string;
  returnDate: string;
  passengers: number;
}

interface Flight {
  id: string;
  flightNumber: string;
  departure: string;
  arrival: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  date: string;
}

interface Props {
  searchParams: SearchParams;
  onBack: () => void;
}

const bundles = [
  {
    id: "lite",
    name: "Isla Lite",
    description: "Perfect for light travelers",
    price: 0,
    features: [
      "7kg carry-on baggage",
      "Random seat assignment",
      "Web check-in available",
    ],
    notIncluded: [
      "Checked baggage",
      "Seat selection",
      "Earn WavePoints",
    ],
  },
  {
    id: "value",
    name: "Isla Value",
    description: "Best value for most travelers",
    price: 800,
    popular: true,
    features: [
      "20kg checked baggage",
      "Standard seat selection",
      "Earn WavePoints",
      "Priority web check-in",
      "Flight changes (₱500 fee)",
    ],
    notIncluded: [
      "Free flight changes",
    ],
  },
  {
    id: "flex",
    name: "Isla Flex",
    description: "Premium flexibility & comfort",
    price: 1600,
    features: [
      "20kg checked baggage",
      "Premium seat selection",
      "Earn 2x WavePoints",
      "Free flight changes",
      "Priority boarding",
      "Complimentary snacks",
    ],
    notIncluded: [],
  },
];

export function BookingFlowPage({ searchParams, onBack }: Props) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedDepartFlight, setSelectedDepartFlight] = useState<Flight | null>(null);
  const [selectedReturnFlight, setSelectedReturnFlight] = useState<Flight | null>(null);
  const [selectedBundle, setSelectedBundle] = useState<string>("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [guestDetails, setGuestDetails] = useState({
    title: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    birthMonth: "",
    birthYear: "",
    nationality: "Philippines",
    wavePointsId: "",
  });
  const [contactDetails, setContactDetails] = useState({
    useGuestDetails: false,
    countryCode: "+63",
    mobile: "",
    email: "",
    retypeEmail: "",
    agreeToTerms: false,
  });

  // Generate mock flights with fixed prices
  const generateFlights = (date: string, isReturn: boolean): Flight[] => {
    const times = [
      { dept: "06:00", arr: "07:30", price: 2150 },
      { dept: "09:15", arr: "10:45", price: 2380 },
      { dept: "12:30", arr: "14:00", price: 2290 },
      { dept: "15:45", arr: "17:15", price: 2450 },
      { dept: "18:30", arr: "20:00", price: 2220 },
    ];

    return times.map((time, idx) => ({
      id: `${isReturn ? 'R' : 'D'}-${idx}`,
      flightNumber: `IJ ${isReturn ? '5' : '4'}${50 + idx}`,
      departure: isReturn ? searchParams.to.split(' ')[0] : searchParams.from.split(' ')[0],
      arrival: isReturn ? searchParams.from.split(' ')[0] : searchParams.to.split(' ')[0],
      departureTime: time.dept,
      arrivalTime: time.arr,
      price: time.price,
      date,
    }));
  };

  const departFlights = generateFlights(searchParams.departDate, false);
  const returnFlights = generateFlights(searchParams.returnDate, true);

  // Generate date options for date strip
  const generateDateOptions = (baseDate: string) => {
    const dates = [];
    const base = new Date(baseDate);
    for (let i = -2; i <= 2; i++) {
      const date = new Date(base);
      date.setDate(base.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const formatDateShort = (date: Date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const formatDateDay = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const departDateOptions = generateDateOptions(searchParams.departDate);
  const returnDateOptions = generateDateOptions(searchParams.returnDate);

  const handleContinue = () => {
    if (step === 1 && selectedDepartFlight) {
      setStep(2);
      window.scrollTo(0, 0);
    } else if (step === 2 && selectedReturnFlight) {
      setStep(3);
      window.scrollTo(0, 0);
    } else if (step === 3 && selectedBundle) {
      setStep(4);
      window.scrollTo(0, 0);
    } else if (step === 4) {
      setStep(5);
      window.scrollTo(0, 0);
    } else if (step === 5) {
      // Show confirmation modal
      setShowConfirmation(true);
    }
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
    navigate("/");
    window.scrollTo(0, 0);
  };

  const canContinue = () => {
    if (step === 1) return !!selectedDepartFlight;
    if (step === 2) return !!selectedReturnFlight;
    if (step === 3) return !!selectedBundle;
    if (step === 4) return guestDetails.firstName && guestDetails.lastName && guestDetails.birthDate;
    if (step === 5) return contactDetails.mobile && contactDetails.email && contactDetails.agreeToTerms;
    return false;
  };

  return (
    <div className="min-h-screen bg-[var(--isla-sand-light)]">
      {/* Progress Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => {
                onBack();
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-2 text-[var(--isla-turquoise)] hover:text-[var(--isla-turquoise-dark)] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back to Search</span>
            </button>
            <div className="text-sm text-gray-600">
              Step {step} of 5
            </div>
          </div>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 rounded-full transition-all ${
                  s <= step ? 'bg-[var(--isla-turquoise)]' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <div className="hidden sm:flex justify-between mt-3 text-xs text-gray-600">
            <span>Select Flight</span>
            <span>Return Flight</span>
            <span>Bundles</span>
            <span>Guest Details</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Outbound Flight Selection */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl mb-2 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                  Select Departure Flight
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  {searchParams.from} → {searchParams.to}
                </p>
              </div>

              {/* Date Strip */}
              <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                <div className="flex overflow-x-auto scrollbar-hide">
                  {departDateOptions.map((date, idx) => {
                    const isSelected = date.toISOString().split('T')[0] === searchParams.departDate;
                    return (
                      <button
                        key={idx}
                        className={`flex-1 min-w-[80px] sm:min-w-[100px] py-3 sm:py-4 px-2 sm:px-3 text-center border-b-2 transition-colors ${
                          isSelected
                            ? 'border-[var(--isla-turquoise)] bg-[var(--isla-turquoise)]/5'
                            : 'border-transparent hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-xs text-gray-500">{formatDateDay(date)}</div>
                        <div className={`text-xs sm:text-sm ${isSelected ? 'text-[var(--isla-turquoise)]' : ''}`} style={{ fontWeight: isSelected ? 600 : 400 }}>
                          {formatDateShort(date)}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          ₱2,290
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Flight Cards */}
              <div className="space-y-4">
                {departFlights.map((flight) => (
                  <motion.div
                    key={flight.id}
                    whileHover={{ scale: 1.01 }}
                    className={`bg-white rounded-xl shadow-sm p-4 sm:p-6 cursor-pointer border-2 transition-all ${
                      selectedDepartFlight?.id === flight.id
                        ? 'border-[var(--isla-turquoise)] ring-2 ring-[var(--isla-turquoise)]/20'
                        : 'border-transparent hover:shadow-md'
                    }`}
                    onClick={() => setSelectedDepartFlight(flight)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      {/* Flight Times - Horizontal on all screens */}
                      <div className="flex items-center gap-3 sm:gap-6 flex-1">
                        {/* Departure Time */}
                        <div className="text-center flex-shrink-0">
                          <div className="text-xl sm:text-2xl text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                            {flight.departureTime}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600">{flight.departure}</div>
                        </div>

                        {/* Flight Icon */}
                        <div className="flex-1 flex items-center justify-center px-2 sm:px-4">
                          <div className="flex items-center gap-2 text-gray-400 w-full">
                            <div className="h-px bg-gray-300 flex-1" />
                            <Plane className="w-4 h-4 sm:w-5 sm:h-5 rotate-90 flex-shrink-0" />
                            <div className="h-px bg-gray-300 flex-1" />
                          </div>
                        </div>

                        {/* Arrival Time */}
                        <div className="text-center flex-shrink-0">
                          <div className="text-xl sm:text-2xl text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                            {flight.arrivalTime}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600">{flight.arrival}</div>
                        </div>
                      </div>

                      {/* Price & Selection */}
                      <div className="flex items-center justify-between sm:flex-col sm:items-end sm:ml-8 sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0">
                        <div className="flex flex-col">
                          <div className="text-xs text-gray-500 mb-1">All-in Fare</div>
                          <div className="text-xl sm:text-2xl text-[var(--isla-orange)] mb-1" style={{ fontWeight: 600 }}>
                            ₱{flight.price.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500 mb-2">{flight.flightNumber}</div>
                        </div>
                        {selectedDepartFlight?.id === flight.id ? (
                          <div className="flex items-center gap-2 text-[var(--isla-turquoise)] sm:justify-end">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm" style={{ fontWeight: 500 }}>Selected</span>
                          </div>
                        ) : (
                          <button className="text-sm text-[var(--isla-turquoise)] hover:underline px-4 py-2">
                            Select
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Return Flight Selection */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl mb-2 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                  Select Return Flight
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  {searchParams.to} → {searchParams.from}
                </p>
              </div>

              {/* Date Strip */}
              <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                <div className="flex overflow-x-auto scrollbar-hide">
                  {returnDateOptions.map((date, idx) => {
                    const isSelected = date.toISOString().split('T')[0] === searchParams.returnDate;
                    return (
                      <button
                        key={idx}
                        className={`flex-1 min-w-[80px] sm:min-w-[100px] py-3 sm:py-4 px-2 sm:px-3 text-center border-b-2 transition-colors ${
                          isSelected
                            ? 'border-[var(--isla-turquoise)] bg-[var(--isla-turquoise)]/5'
                            : 'border-transparent hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-xs text-gray-500">{formatDateDay(date)}</div>
                        <div className={`text-xs sm:text-sm ${isSelected ? 'text-[var(--isla-turquoise)]' : ''}`} style={{ fontWeight: isSelected ? 600 : 400 }}>
                          {formatDateShort(date)}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          ₱2,290
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Flight Cards */}
              <div className="space-y-4">
                {returnFlights.map((flight) => (
                  <motion.div
                    key={flight.id}
                    whileHover={{ scale: 1.01 }}
                    className={`bg-white rounded-xl shadow-sm p-4 sm:p-6 cursor-pointer border-2 transition-all ${
                      selectedReturnFlight?.id === flight.id
                        ? 'border-[var(--isla-turquoise)] ring-2 ring-[var(--isla-turquoise)]/20'
                        : 'border-transparent hover:shadow-md'
                    }`}
                    onClick={() => setSelectedReturnFlight(flight)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      {/* Flight Times - Horizontal on all screens */}
                      <div className="flex items-center gap-3 sm:gap-6 flex-1">
                        {/* Departure Time */}
                        <div className="text-center flex-shrink-0">
                          <div className="text-xl sm:text-2xl text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                            {flight.departureTime}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600">{flight.departure}</div>
                        </div>

                        {/* Flight Icon */}
                        <div className="flex-1 flex items-center justify-center px-2 sm:px-4">
                          <div className="flex items-center gap-2 text-gray-400 w-full">
                            <div className="h-px bg-gray-300 flex-1" />
                            <Plane className="w-4 h-4 sm:w-5 sm:h-5 rotate-90 flex-shrink-0" />
                            <div className="h-px bg-gray-300 flex-1" />
                          </div>
                        </div>

                        {/* Arrival Time */}
                        <div className="text-center flex-shrink-0">
                          <div className="text-xl sm:text-2xl text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                            {flight.arrivalTime}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600">{flight.arrival}</div>
                        </div>
                      </div>

                      {/* Price & Selection */}
                      <div className="flex items-center justify-between sm:flex-col sm:items-end sm:ml-8 sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0">
                        <div className="flex flex-col">
                          <div className="text-xs text-gray-500 mb-1">All-in Fare</div>
                          <div className="text-xl sm:text-2xl text-[var(--isla-orange)] mb-1" style={{ fontWeight: 600 }}>
                            ₱{flight.price.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500 mb-2">{flight.flightNumber}</div>
                        </div>
                        {selectedReturnFlight?.id === flight.id ? (
                          <div className="flex items-center gap-2 text-[var(--isla-turquoise)] sm:justify-end">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="text-sm" style={{ fontWeight: 500 }}>Selected</span>
                          </div>
                        ) : (
                          <button className="text-sm text-[var(--isla-turquoise)] hover:underline px-4 py-2">
                            Select
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 3: Bundle Selection */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl mb-2 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                  Choose Your Bundle
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Select the best option for your journey
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bundles.map((bundle) => (
                  <motion.div
                    key={bundle.id}
                    whileHover={{ scale: 1.02 }}
                    className={`bg-white rounded-xl shadow-sm p-4 sm:p-6 cursor-pointer border-2 transition-all relative ${
                      selectedBundle === bundle.id
                        ? 'border-[var(--isla-turquoise)] ring-2 ring-[var(--isla-turquoise)]/20'
                        : 'border-gray-200 hover:shadow-md'
                    }`}
                    onClick={() => setSelectedBundle(bundle.id)}
                  >
                    {bundle.popular && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--isla-orange)] text-white px-4 py-1 rounded-full text-xs" style={{ fontWeight: 600 }}>
                        Most Popular
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="text-xl mb-2 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                        {bundle.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">{bundle.description}</p>
                      <div className="text-2xl text-[var(--isla-orange)]" style={{ fontWeight: 600 }}>
                        {bundle.price === 0 ? 'Included' : `+₱${bundle.price}`}
                      </div>
                      <div className="text-xs text-gray-500">per passenger</div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {bundle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                      {bundle.notIncluded.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 opacity-40">
                          <div className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-500 line-through">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      className={`w-full py-3 rounded-lg transition-colors ${
                        selectedBundle === bundle.id
                          ? 'bg-[var(--isla-turquoise)] text-white'
                          : 'bg-white border-2 border-[var(--isla-turquoise)] text-[var(--isla-turquoise)] hover:bg-[var(--isla-turquoise)]/5'
                      }`}
                      style={{ fontWeight: 500 }}
                    >
                      {selectedBundle === bundle.id ? 'Selected' : 'Select Bundle'}
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* WavePoints Info */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 flex items-start gap-3">
                <Info className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs sm:text-sm text-blue-900">
                    <span style={{ fontWeight: 600 }}>Earn WavePoints!</span> Select Isla Value or Isla Flex to earn points on this booking that you can redeem for future flights.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 4: Guest Details */}
          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl mb-2 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                  Guest Details
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Please ensure the name matches your government-issued ID
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 max-w-2xl">
                <div className="space-y-4 sm:space-y-6">
                  {/* Title */}
                  <div>
                    <label className="block mb-2 text-gray-700" style={{ fontWeight: 500 }}>
                      Title <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={guestDetails.title}
                      onChange={(e) => setGuestDetails({ ...guestDetails, title: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)] bg-white"
                      required
                    >
                      <option value="">Select title</option>
                      <option value="Mr">Mr</option>
                      <option value="Ms">Ms</option>
                      <option value="Mrs">Mrs</option>
                    </select>
                  </div>

                  {/* First Name */}
                  <div>
                    <label className="block mb-2 text-gray-700" style={{ fontWeight: 500 }}>
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={guestDetails.firstName}
                      onChange={(e) => setGuestDetails({ ...guestDetails, firstName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)]"
                      placeholder="Enter first name"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">As shown on your ID</p>
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block mb-2 text-gray-700" style={{ fontWeight: 500 }}>
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={guestDetails.lastName}
                      onChange={(e) => setGuestDetails({ ...guestDetails, lastName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)]"
                      placeholder="Enter last name"
                      required
                    />
                  </div>

                  {/* Date of Birth */}
                  <div>
                    <label className="block mb-2 text-gray-700" style={{ fontWeight: 500 }}>
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <input
                        type="number"
                        value={guestDetails.birthDate}
                        onChange={(e) => setGuestDetails({ ...guestDetails, birthDate: e.target.value })}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)]"
                        placeholder="DD"
                        min="1"
                        max="31"
                        required
                      />
                      <select
                        value={guestDetails.birthMonth}
                        onChange={(e) => setGuestDetails({ ...guestDetails, birthMonth: e.target.value })}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)] bg-white"
                        required
                      >
                        <option value="">Month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                      <input
                        type="number"
                        value={guestDetails.birthYear}
                        onChange={(e) => setGuestDetails({ ...guestDetails, birthYear: e.target.value })}
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)]"
                        placeholder="YYYY"
                        min="1900"
                        max="2026"
                        required
                      />
                    </div>
                  </div>

                  {/* Nationality */}
                  <div>
                    <label className="block mb-2 text-gray-700" style={{ fontWeight: 500 }}>
                      Nationality <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={guestDetails.nationality}
                      onChange={(e) => setGuestDetails({ ...guestDetails, nationality: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)] bg-white"
                      required
                    >
                      <option value="Philippines">Philippines</option>
                      <option value="USA">United States</option>
                      <option value="Japan">Japan</option>
                      <option value="Korea">South Korea</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* WavePoints ID */}
                  <div>
                    <label className="block mb-2 text-gray-700" style={{ fontWeight: 500 }}>
                      WavePoints Membership ID <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={guestDetails.wavePointsId}
                      onChange={(e) => setGuestDetails({ ...guestDetails, wavePointsId: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)]"
                      placeholder="Enter membership ID"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 5: Contact Information */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl mb-2 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                  Contact Information
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  We'll send your booking confirmation here
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 max-w-2xl">
                <div className="space-y-4 sm:space-y-6">
                  {/* Use Guest Details Toggle */}
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <input
                      type="checkbox"
                      id="useGuestDetails"
                      checked={contactDetails.useGuestDetails}
                      onChange={(e) => setContactDetails({ ...contactDetails, useGuestDetails: e.target.checked })}
                      className="w-4 h-4 text-[var(--isla-turquoise)] focus:ring-[var(--isla-turquoise)]"
                    />
                    <label htmlFor="useGuestDetails" className="text-sm text-gray-700">
                      Use guest's details for contact information
                    </label>
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block mb-2 text-gray-700" style={{ fontWeight: 500 }}>
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex gap-3">
                      <select
                        value={contactDetails.countryCode}
                        onChange={(e) => setContactDetails({ ...contactDetails, countryCode: e.target.value })}
                        className="w-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)] bg-white"
                      >
                        <option value="+63">+63</option>
                        <option value="+1">+1</option>
                        <option value="+81">+81</option>
                        <option value="+82">+82</option>
                      </select>
                      <input
                        type="tel"
                        value={contactDetails.mobile}
                        onChange={(e) => setContactDetails({ ...contactDetails, mobile: e.target.value })}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)]"
                        placeholder="9XX XXX XXXX"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-2 text-gray-700" style={{ fontWeight: 500 }}>
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={contactDetails.email}
                      onChange={(e) => setContactDetails({ ...contactDetails, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)]"
                      placeholder="email@example.com"
                      required
                    />
                  </div>

                  {/* Retype Email */}
                  <div>
                    <label className="block mb-2 text-gray-700" style={{ fontWeight: 500 }}>
                      Retype Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={contactDetails.retypeEmail}
                      onChange={(e) => setContactDetails({ ...contactDetails, retypeEmail: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--isla-turquoise)]"
                      placeholder="email@example.com"
                      required
                    />
                    {contactDetails.email && contactDetails.retypeEmail && contactDetails.email !== contactDetails.retypeEmail && (
                      <p className="text-xs text-red-500 mt-1">Email addresses do not match</p>
                    )}
                  </div>

                  {/* Terms Agreement */}
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      checked={contactDetails.agreeToTerms}
                      onChange={(e) => setContactDetails({ ...contactDetails, agreeToTerms: e.target.checked })}
                      className="w-4 h-4 text-[var(--isla-turquoise)] focus:ring-[var(--isla-turquoise)] mt-0.5"
                      required
                    />
                    <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                      I agree to the{' '}
                      <a href="#" className="text-[var(--isla-turquoise)] hover:underline">
                        Privacy Policy
                      </a>
                      {' '}and{' '}
                      <a href="#" className="text-[var(--isla-turquoise)] hover:underline">
                        Terms & Conditions
                      </a>
                    </label>
                  </div>
                </div>
              </div>

              {/* Booking Summary */}
              <div className="mt-6 bg-white rounded-xl shadow-sm p-4 sm:p-6 max-w-2xl">
                <h3 className="text-base sm:text-lg mb-4 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 600 }}>
                  Booking Summary
                </h3>
                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Outbound Flight</span>
                    <span className="text-gray-900" style={{ fontWeight: 500 }}>
                      ₱{selectedDepartFlight?.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Return Flight</span>
                    <span className="text-gray-900" style={{ fontWeight: 500 }}>
                      ₱{selectedReturnFlight?.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-gray-600">Bundle ({bundles.find(b => b.id === selectedBundle)?.name})</span>
                    <span className="text-gray-900" style={{ fontWeight: 500 }}>
                      ₱{((bundles.find(b => b.id === selectedBundle)?.price || 0) * searchParams.passengers).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 pt-4">
                    <span className="text-gray-900" style={{ fontWeight: 600 }}>Total Amount</span>
                    <span className="text-xl sm:text-2xl text-[var(--isla-orange)]" style={{ fontWeight: 600 }}>
                      ₱{(
                        (selectedDepartFlight?.price || 0) +
                        (selectedReturnFlight?.price || 0) +
                        ((bundles.find(b => b.id === selectedBundle)?.price || 0) * searchParams.passengers)
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Continue Button */}
        <div className="mt-8 flex justify-center px-4">
          <button
            onClick={handleContinue}
            disabled={!canContinue()}
            className={`w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all ${
              canContinue()
                ? 'bg-[var(--isla-orange)] text-white hover:bg-[var(--isla-orange)]/90 hover:scale-[1.02]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            style={{ fontWeight: 600 }}
          >
            {step === 5 ? 'Proceed to Payment' : 'Continue'}
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleConfirmationClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleConfirmationClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Check className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                </div>

                <h3 className="text-xl sm:text-2xl mb-3 text-[var(--isla-turquoise-dark)]" style={{ fontWeight: 700 }}>
                  Booking Confirmed!
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                  Your flight has been successfully booked. A confirmation email has been sent to{' '}
                  <span style={{ fontWeight: 600 }} className="break-all">{contactDetails.email}</span>
                </p>

                <div className="bg-[var(--isla-sand)] rounded-lg p-4 mb-6 text-left">
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Booking Reference</span>
                      <span style={{ fontWeight: 600 }}>IJ{Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Passenger</span>
                      <span style={{ fontWeight: 600 }}>{guestDetails.firstName} {guestDetails.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Route</span>
                      <span style={{ fontWeight: 600 }}>{searchParams.from.split(' ')[0]} ↔ {searchParams.to.split(' ')[0]}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-6">
                  This is a demo booking. In a real application, payment would be processed here.
                </p>

                <button
                  onClick={handleConfirmationClose}
                  className="w-full px-8 py-4 bg-[var(--isla-turquoise)] text-white rounded-full hover:bg-[var(--isla-turquoise-dark)] transition-all hover:scale-[1.02]"
                  style={{ fontWeight: 600 }}
                >
                  Return to Homepage
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
