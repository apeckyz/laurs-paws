import { Clock } from 'lucide-react';
import { OPENING_TIMES } from '../../utils/constants';

const OpeningTimes = () => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md">
      <div className="flex items-center gap-3 mb-6">
        <Clock size={28} className="text-brand-yellow" />
        <h3 className="text-2xl font-bold">Opening Times</h3>
      </div>
      
      <div className="space-y-3">
        {OPENING_TIMES.map((day) => (
          <div 
            key={day.day}
            className={`flex justify-between items-center py-2 border-b border-gray-200 last:border-0 ${
              !day.open ? 'opacity-50' : ''
            }`}
          >
            <span className="font-semibold">{day.day}</span>
            <span className={`${day.open ? 'text-green-600' : 'text-red-600'} font-medium`}>
              {day.hours}
            </span>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-gray-600 text-center">
          Please call ahead to book your appointment
        </p>
      </div>
    </div>
  );
};

export default OpeningTimes;
