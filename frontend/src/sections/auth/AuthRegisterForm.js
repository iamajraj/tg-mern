import { useMemo, useState } from 'react';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert, MenuItem, Link, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
import countryList from 'react-select-country-list'

// components
import Iconify from '../../components/iconify';
import FormProvider, { RHFCheckbox, RHFSelect, RHFTextField } from '../../components/hook-form';
import { PATH_AUTH } from '../../routes/paths';
// ----------------------------------------------------------------------

export default function AuthRegisterForm() {
  const { register } = useAuthContext();
  let countryName = 'India'
  const [showPassword, setShowPassword] = useState(false);


  const countryArray = countryList().getData().map((country, index) => {
      return (
        <MenuItem
          value={country.label}
          key={index}
        >
          {country.label}
        </MenuItem>
      );
    })
  const RegisterSchema = Yup.object().shape({
    first_name: Yup.string().required('First name required'),
    last_name: Yup.string().required('Last name required'),
    dob: Yup.date().required('Date of Birth required'),
    nationality: Yup.string().required('Nationality required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
    data_agreement: Yup.string().oneOf(['true']).required('Please accept data agreement'),
    tnc: Yup.string().oneOf(['true']).required('Please accept t&c'),
    confirmPassword: Yup.string().required('Password is required').oneOf([Yup.ref("password")], "Passwords do not match"),
    referral_code: Yup.string(),
  });

  const defaultValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    nationality: '',
    referral_code: '',
    tnc : '',
    data_agreement:''
  };
  //I agree to the terms of the Crypto.com Privacy Notice and Crypto.com Exchange Terms & conditions.

  const tncComp = (<div>
    {'I agree to the terms of the '}
    <Link underline="always" color="text.secondary">
      Crypto.com Privacy Notice
    </Link>
    {' and '}
    <Link underline="always" color="text.secondary">
      Crypto.com Exchange Terms & conditions
    </Link>
    .
  </div>);

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    console.log("ON SUBMIT",data);
    try {
      if (register) {
        await register(
          data.email,
          data.password,
          data.first_name,
          data.last_name,
          data.dob,
          data.nationality,
          data.referral_code,
        );
        window.location.href = PATH_AUTH.verify;
      }
    } catch (error) {
      console.error(error);
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message || error,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2.5}>
        {!!errors.afterSubmit && <Alert severity='error'>{errors.afterSubmit.message}</Alert>}

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name='first_name' label='First name' />
          <RHFTextField name='last_name' label='Last name' />
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField
            name='dob'
            label='Date Of Birth'
            type='date'
          />
          <RHFSelect
            name='nationality'
            label='Nationality'
            children={countryArray}
          />

        </Stack>

        <RHFTextField name='email' label='Email address' />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField
            name='password'
            label='Password'
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <RHFTextField
            name='confirmPassword'
            label='Confirm Password'
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

        </Stack>

        <RHFTextField
          name='referral_code'
          label='Referral Code'
          type='text'
        />

        <RHFCheckbox
          name="tnc"
          // label="I agree to the terms of the <Link>Crypto.com Privacy Notice</Link> and Crypto.com Exchange Terms & conditions."
          label={tncComp}
        />
        <RHFCheckbox
          name="data_agreement"
          label="I agree that the data above will be used to check and notify me on whether Crypto.com Exchange is available in my region"
        />

        <LoadingButton
          fullWidth
          color='inherit'
          size='large'
          type='submit'
          variant='contained'
          loading={isSubmitting || isSubmitSuccessful}
          sx={{
            bgcolor: 'text.primary',
            color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            '&:hover': {
              bgcolor: 'text.primary',
              color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
            },
          }}
        >
          Create account
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
