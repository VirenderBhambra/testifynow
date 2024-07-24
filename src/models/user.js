import mongoose from 'mongoose';
const { Schema } = mongoose;

// Define the schema for a testimonial submission
const TestimonialSubmissionSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    validate: {
      validator: function(arr) {
        return arr.length > 0;
      },
      message: 'At least one answer is required.'
    }
  },
  testimonialId:{
    type:String,
    required: true,
  }
});

// Check if the model already exists before creating it
const TestimonialSubmissionModel = mongoose.models.TestimonialSubmission || mongoose.model('TestimonialSubmission', TestimonialSubmissionSchema);

export default TestimonialSubmissionModel;
