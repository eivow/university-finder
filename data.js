// Countries data
const countries = [
    { id: 1, name: 'United Kingdom', flag: '🇬🇧', description: 'Prestigious universities with strong academic reputation' },
    { id: 2, name: 'Spain', flag: '🇪🇸', description: 'Affordable tuition with vibrant student life' },
    { id: 3, name: 'Italy', flag: '🇮🇹', description: 'Rich cultural heritage and diverse academic programs' },
    { id: 4, name: 'Rome', flag: '🇮🇹', description: 'Historic capital of Italy with excellent universities' },
    { id: 5, name: 'Canada', flag: '🇨🇦', description: 'High-quality education with affordable tuition' },
    { id: 6, name: 'United States of America', flag: '🇺🇸', description: 'Top-ranked universities with diverse programs' }
];

// Universities data
const universities = [
    { id: 1, countryId: 1, name: 'University of Oxford', difficulty: 'hard', description: 'One of the world\'s oldest universities' },
    { id: 2, countryId: 1, name: 'University of Cambridge', difficulty: 'hard', description: 'Elite research university' },
    { id: 3, countryId: 1, name: 'LSE', difficulty: 'hard', description: 'London School of Economics' },
    
    { id: 4, countryId: 2, name: 'Universidad de Barcelona', difficulty: 'medium', description: 'Spain\'s leading university' },
    { id: 5, countryId: 2, name: 'Universidad Autónoma de Madrid', difficulty: 'medium', description: 'Top research institution' },
    
    { id: 6, countryId: 3, name: 'University of Milan', difficulty: 'medium', description: 'Leading Italian university' },
    { id: 7, countryId: 3, name: 'Politecnico di Milano', difficulty: 'hard', description: 'Top engineering university' },
    
    { id: 8, countryId: 4, name: 'Sapienza University of Rome', difficulty: 'medium', description: 'Italy\'s oldest university' },
    { id: 9, countryId: 4, name: 'LUISS Guido Carli', difficulty: 'medium', description: 'Leading business school' },
    
    { id: 10, countryId: 5, name: 'University of Toronto', difficulty: 'hard', description: 'Canada\'s top-ranked university' },
    { id: 11, countryId: 5, name: 'McGill University', difficulty: 'hard', description: 'Research-focused institution' },
    { id: 12, countryId: 5, name: 'University of British Columbia', difficulty: 'medium', description: 'Strong engineering and science programs' },
    
    { id: 13, countryId: 6, name: 'Harvard University', difficulty: 'hard', description: 'Ivy League institution' },
    { id: 14, countryId: 6, name: 'MIT', difficulty: 'hard', description: 'World leader in technology and engineering' },
    { id: 15, countryId: 6, name: 'Stanford University', difficulty: 'hard', description: 'Top tech and innovation hub' }
];

// University details data
const details = [
    {
        universityId: 1,
        tuitionFee: '£15,000 - £25,000 per year',
        rentCost: '£600 - £1,000 per month',
        otherExpenses: ['Food: £150-300/month', 'Transportation: £30-60/month', 'Books: £300-500/year'],
        minGrade: 'A levels or equivalent',
        testScores: 'IELTS 7.5+, SAT 1500+',
        usefulInfo: ['Historic university with strong alumni network', 'Scholarship opportunities available', 'Oxbridge tutoring system']
    },
    {
        universityId: 4,
        tuitionFee: '€3,000 - €10,000 per year',
        rentCost: '€400 - €700 per month',
        otherExpenses: ['Food: €100-200/month', 'Transportation: €30-50/month', 'Books: €200-400/year'],
        minGrade: '3.0+ GPA',
        testScores: 'IELTS 6.0+',
        usefulInfo: ['EU students pay less tuition', 'Mediterranean lifestyle', 'Great internship opportunities']
    },
    {
        universityId: 8,
        tuitionFee: '€3,000 - €8,000 per year',
        rentCost: '€350 - €600 per month',
        otherExpenses: ['Food: €100-180/month', 'Transportation: €25-40/month', 'Books: €200-400/year'],
        minGrade: '3.0+ GPA',
        testScores: 'IELTS 5.5+',
        usefulInfo: ['Ancient university in historic city', 'Affordable cost of living', 'Rich cultural experience']
    },
    {
        universityId: 10,
        tuitionFee: '$20,000 - $30,000 per year',
        rentCost: '$800 - $1,200 per month',
        otherExpenses: ['Food: $200-400/month', 'Transportation: $50-100/month', 'Books: $500-1000/year'],
        minGrade: '3.5+ GPA',
        testScores: 'IELTS 6.5+',
        usefulInfo: ['Work permit allows 20hrs/week during studies', 'Post-graduation work permit available', 'Canada has express entry program']
    },
    {
        universityId: 13,
        tuitionFee: '$50,000 - $60,000 per year',
        rentCost: '$1,000 - $1,800 per month',
        otherExpenses: ['Food: $300-500/month', 'Transportation: $100-200/month', 'Books: $800-1200/year'],
        minGrade: '3.8+ GPA',
        testScores: 'IELTS 7.5+, SAT 1550+',
        usefulInfo: ['Excellent financial aid available', 'Strong alumni network worldwide', 'Leading research opportunities']
    }
];