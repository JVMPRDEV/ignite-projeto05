import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$small',
  textAlign: 'center',
  minWidth: 120,
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',

  cursor: 'pointer',

  svg: {
    height: '$4',
    width: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',
        transition: 'background-color 0.2s',

        '&:not(:disabled):hover': {
          background: '$ignite700',
        },

        '&:disabled': {
          background: '$gray200',
        },
      },

      secondary: {
        color: '$ignite300',
        border: '1px solid $ignite500',
        transition: 'background-color 0.2s',

        '&:not(:disabled):hover': {
          background: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          borderColor: '$gray200',
          color: '$white',
        },
      },

      tertiary: {
        color: '$gray100',
        transition: 'color 0.2s',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },
      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
