// @flow
import React from 'react'
import styled, { withTheme } from 'styled-components'
import { rhythm, scale } from 'src/typography'
import TaglineSection from 'src/components/tagline-section'
import Button from 'src/components/button'

const Form = styled.form`
  ${props => props.theme.media.phone`
    width: 100%
    padding-left: ${rhythm(2)};
    padding-right: ${rhythm(2)};
  `}
  width: 50%;
  margin: auto;
  ${scale(2 / 4)};

  label {
    display: block;
    margin-bottom: ${rhythm(1 / 4)};
  }

  input,
  textarea {
    border-radius: 0;
    width: 100%;
    padding: ${rhythm(1 / 2)};
    display: block;
    margin-bottom: ${rhythm(1)};

    :focus {
      outline: 2px solid ${props => props.theme.color.primary.dark};
    }
  }
  .projectProposal {
    height: ${rhythm(5)};
  }
`

type State = {}
type Props = {
  theme: any,
  autoFocus: boolean,
}

class ContactMe extends React.Component<State, Props> {
  inputRef: any
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }

  focusFirstInput = () => {
    this.inputRef.current.focus()
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.focusFirstInput()
    }
  }

  render() {
    const { theme, autoFocus } = this.props
    const emailAddress = 'savvas@savvasnicholas.com'
    const mailto = `mailto:${emailAddress}`
    return (
      <>
        <TaglineSection
          crazyTextRange={0.3}
          title={
            <>
              Let's
              <br />
              work
              <br />
              together.
            </>
          }
          subtitle={
            <>
              Contact me.
              <br />
              Use the form below or just send me an email at{' '}
              <a href={mailto}>{emailAddress}</a>.
            </>
          }
          align='left'
          colors={{ backgroundColor: theme.color.contrast.main }}
        />
        <Form
          name='contact'
          method='post'
          action='/thank-you/'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
        >
          <input type='hidden' name='form-name' value='contact' />
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            required
            placeholder={'Bob Builder'}
            ref={this.inputRef}
          />
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            required
            placeholder={'bob@builder.com'}
          />
          {/*<label>*/}
          {/*Estimated Budget*/}
          {/*<input type='text' placeholder={'£5,000'} />*/}
          {/*</label>*/}
          <label htmlFor='message'>
            Tell me a bit about your project or proposal.
          </label>
          <textarea
            id='message'
            name='message'
            className='projectProposal'
            placeholder={`...like to build a search algorithm for the meaning of life or something.`}
            required
          />
          <Button>Send message.</Button>
        </Form>
      </>
    )
  }
}

export default withTheme(ContactMe)
