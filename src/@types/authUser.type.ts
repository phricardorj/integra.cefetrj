export type IAuthenticatedUser = {
  name: string;
  studentId: string;
  document?: {
    type: "NATURAL_PERSON";
    id: string;
  };
  enrollment?: string;
  course?: string;
  currentPeriod?: string;
  enrollmentPeriod?: string;
};

export type IEnrollmentValidationData = {
  student: {
    code: string;
    url: string;
  };
};
