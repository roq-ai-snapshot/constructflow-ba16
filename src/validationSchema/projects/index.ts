import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  name: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  estimated_cost: yup.number().integer().required(),
  organization_id: yup.string().nullable().required(),
});
