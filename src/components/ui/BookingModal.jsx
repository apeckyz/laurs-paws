import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { format, addDays, isSunday, isMonday, isTuesday, isWednesday, isThursday, isFriday, isSaturday } from 'date-fns';
import 'react-day-picker/dist/style.css';

const BookingModal = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petType: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    'Pet Grooming',
    'Dog Walking',
    'Pet Sitting',
    'Cat Visits'
  ];

  const getAvailableTimesForDay = (date) => {
    if (!date) return [];
    
    if (isSunday(date)) {
      return [];
    }
    
    if (isSaturday(date)) {
      return [
        '10:00', '10:30', '11:00', '11:30', 
        '12:00', '12:30', '13:00', '13:30',
        '14:00', '14:30', '15:00', '15:30'
      ];
    }
    
    return [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
      '15:00', '15:30', '16:00', '16:30'
    ];
  };

  const disabledDays = [
    { dayOfWeek: [0] }
  ];

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const bookingData = {
      ...formData,
      service: selectedService,
      date: selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : '',
      time: selectedTime,
      message: `Booking Request:
Service: ${selectedService}
Date: ${selectedDate ? format(selectedDate, 'EEEE, MMMM d, yyyy') : ''}
Time: ${selectedTime}
Pet Name: ${formData.petName}
Pet Type: ${formData.petType}
Additional Notes: ${formData.notes || 'None'}`
    };

    try {
      const response = await fetch('https://formspree.io/f/xeekzjbe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          onClose();
          setSubmitSuccess(false);
          setSelectedDate(null);
          setSelectedTime(null);
          setSelectedService('');
          setFormData({
            name: '',
            email: '',
            phone: '',
            petName: '',
            petType: '',
            notes: ''
          });
        }, 2000);
      }
    } catch (error) {
      console.error('Booking submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableTimes = getAvailableTimesForDay(selectedDate);
  const canSubmit = selectedDate && selectedTime && selectedService && formData.name && formData.email && formData.phone;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-brand-yellow p-6 rounded-t-2xl flex items-center justify-between z-10">
                <h2 className="text-2xl md:text-3xl font-bold">Book an Appointment</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X size={24} />
                </button>
              </div>

              {submitSuccess ? (
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Booking Request Sent!</h3>
                  <p className="text-gray-600">We'll contact you shortly to confirm your appointment.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 md:p-8">
                  <div className="mb-8">
                    <label className="block text-lg font-semibold mb-3">Select Service *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => setSelectedService(service)}
                          className={`p-4 rounded-lg border-2 font-semibold transition-all ${
                            selectedService === service
                              ? 'border-brand-yellow bg-brand-yellow text-black'
                              : 'border-gray-200 hover:border-brand-yellow'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div>
                      <label className="block text-lg font-semibold mb-3 flex items-center gap-2">
                        <CalendarIcon size={20} />
                        Select Date *
                      </label>
                      <div className="border-2 border-gray-200 rounded-lg p-4">
                        <DayPicker
                          mode="single"
                          selected={selectedDate}
                          onSelect={handleDateSelect}
                          disabled={disabledDays}
                          fromDate={new Date()}
                          toDate={addDays(new Date(), 60)}
                          modifiersClassNames={{
                            selected: 'bg-brand-yellow text-black font-bold',
                            today: 'font-bold text-brand-yellow'
                          }}
                        />
                      </div>
                      {selectedDate && availableTimes.length === 0 && (
                        <p className="text-red-600 mt-2 text-sm">No available times for this day</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-lg font-semibold mb-3 flex items-center gap-2">
                        <Clock size={20} />
                        Select Time *
                      </label>
                      {selectedDate ? (
                        <div className="grid grid-cols-3 gap-2 max-h-[400px] overflow-y-auto border-2 border-gray-200 rounded-lg p-4">
                          {availableTimes.map((time) => (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`p-3 rounded-lg border-2 font-semibold transition-all text-sm ${
                                selectedTime === time
                                  ? 'border-brand-yellow bg-brand-yellow text-black'
                                  : 'border-gray-200 hover:border-brand-yellow'
                              }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-400">
                          Please select a date first
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block font-semibold mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-yellow focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-yellow focus:outline-none"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-yellow focus:outline-none"
                        placeholder="07123 456789"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Pet Name</label>
                      <input
                        type="text"
                        value={formData.petName}
                        onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-yellow focus:outline-none"
                        placeholder="Buddy"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Pet Type</label>
                      <input
                        type="text"
                        value={formData.petType}
                        onChange={(e) => setFormData({ ...formData, petType: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-yellow focus:outline-none"
                        placeholder="Dog, Cat, etc."
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block font-semibold mb-2">Additional Notes</label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-yellow focus:outline-none"
                      placeholder="Any special requirements or information we should know..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!canSubmit || isSubmitting}
                    className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
                      canSubmit && !isSubmitting
                        ? 'bg-brand-yellow hover:bg-brand-yellow/90 text-black'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Booking Request'}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
