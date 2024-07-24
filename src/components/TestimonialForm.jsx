import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DeleteIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "./ui/button";

export const TestimonialForm = ({
  testimonialData,
  handleChange,
  onSubmit,
}) => {
  const [length, setLength] = useState(false);
  const [questions, setQuestions] = useState(testimonialData.questions);

  // Only update questions in the parent state when questions change, not on every render
  useEffect(() => {
    handleChange({ target: { name: "questions", value: questions } });
  }, [questions]);

  function addQuestion() {
    if (questions.length < 5) {
      setQuestions([...questions, "A new question"]);
    }
    if (questions.length + 1 >= 5) {
      setLength(true);
    }
  }

  function deleteQuestion(index) {
    setQuestions((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    if (questions.length <= 5) {
      setLength(false);
    }
  }

  function updateQuestion(ind, value) {
    const updatedQuestions = [...questions];
    updatedQuestions[ind] = value;
    setQuestions(updatedQuestions);
  }

  return (
    <div className="p-12 w-full max-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-2">Create a new space !!</h1>
      <p className="mt-2">
        After the Space is created, it will generate a dedicated page for
        collecting testimonials.
      </p>

      <form
        onSubmit={onSubmit}
        className="w-full mt-6 flex flex-col gap-2 overflow-y-auto scroll-smooth scroll-m-1"
      >
        <p>Enter your Space name</p>
        <Input
          name="spaceName"
          type="text"
          placeholder="Enter your space name"
          className="text-black"
          onChange={handleChange}
          required
        />
        <p>Header Title</p>
        <Input
          name="header"
          type="text"
          placeholder="Enter your header title"
          className="text-black"
          onChange={handleChange}
          required
        />

        <p>Your custom message</p>
        <Textarea
          name="message"
          className="text-black"
          placeholder="Enter a warm message to your customer."
          onChange={handleChange}
          required
        />

        <p>Questions</p>
        {questions.map((question, ind) => (
          <div key={ind} className="flex items-center">
            <Input
              type="text"
              value={question}
              className="text-black"
              onChange={(e) => updateQuestion(ind, e.target.value)}
              required
            />
            <DeleteIcon onClick={() => deleteQuestion(ind)} />
          </div>
        ))}
        <Button
          className="self-start"
          type="button"
          onClick={addQuestion}
          disabled={length}
        >
          Add up to 5
          <PlusCircleIcon />
        </Button>
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 mt-4"
          type="submit"
        >
          Create new space
        </Button>
      </form>
    </div>
  );
};
