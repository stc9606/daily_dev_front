import React from 'react'
import Header from '../layouts/Header'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useLogin } from '../hooks/useLogin'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { TLoginInfo } from '../types/commonTypes'
import Loading from '../components/loading/Loading'

export default function Login() {
  const { login, isLoading, errorMessage, setErrorMessage } = useLogin()
  const { register, handleSubmit } = useForm<TLoginInfo>()

  const onSubmit: SubmitHandler<TLoginInfo> = (data) => {
    login(data)
  }

  return (
    <div className="bg-slate-50 min-h-screen flex">
      <Header />
      {isLoading && <Loading />}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            로그인
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md px-6 py-12 shadow-lg rounded-lg bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                이메일
              </label>
              <div className="mt-2">
                <input
                  {...register('email', {
                    required: true,
                    onChange: () => {
                      setErrorMessage('')
                    },
                  })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  비밀번호
                </label>
              </div>
              <div className="mt-2">
                <input
                  {...register('password', {
                    required: true,
                    onChange: () => {
                      setErrorMessage('')
                    },
                  })}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {errorMessage && (
              <p className="flex items-center mt-2 text-xs leading-5 text-pink-500">
                <ExclamationCircleIcon className="stroke-pink-500 fill-none inline w-4 mr-1" />
                {errorMessage}
              </p>
            )}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                로그인
              </button>
            </div>
          </form>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          회원이 아니신가요?
          <a
            href="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2"
          >
            회원가입
          </a>
        </p>
      </div>
    </div>
  )
}
