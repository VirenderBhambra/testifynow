import mongoose from 'mongoose';
const { Schema } = mongoose;

// Define the schema for a testimonial
const TestimonialSchema = new Schema({
  spaceName: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  questions: {
    type: [String],
    validate: {
      validator: function (arr) {
        return arr.length <= 5;
      },
      message: 'You can add up to 5 questions only.'
    }
  }
});

// Check if the model already exists before creating it
const TestimonialModel = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);

export default TestimonialModel;
 