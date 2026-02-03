import React, { useRef, forwardRef } from 'react'

// Child input component that can receive a ref from its parent.
// "forwardRef" lets this component expose its internal input element
// so the parent can call DOM methods like .focus().
const TextInput = forwardRef(function TextInput(props, ref) {
    return (
        <div style={{ marginBottom: '0.75rem' }}>
            {/* The ref we receive from the parent is attached to the real DOM input */}
            <label style={{ display: 'block', marginBottom: '4px' }}>
                {props.label}
            </label>

            <input
                ref={ref} // connects the parent ref to this <input /> DOM element
                type="text"
                placeholder={props.placeholder}
                style={{
                    padding: '0.4rem 0.6rem',
                    borderRadius: '4px',
                    border: '1px solid #d1d5db',
                    minWidth: '220px',
                }}
            />
        </div>
    )
})

const RefProps = () => {
    // 1️⃣ Create a ref object. React keeps the same object between renders.
    //    After the input mounts, ref.current will point to the <input /> DOM node.
    const firstNameInputRef = useRef(null)

    // 2️⃣ Event handler that uses the ref to focus the input.
    const handleFocusClick = () => {
        // ref.current is either:
        // - null (before the input has mounted), or
        // - the actual DOM node for the <input /> once it's rendered.
        if (firstNameInputRef.current) {
            firstNameInputRef.current.focus()
        }
    }

    return (
        <section id="ref" style={{ marginTop: '2.5rem' }}>
            <h2 style={{ marginBottom: '1rem' }}>
                useRef + forwardRef example (input focus)
            </h2>

            {/* Parent passes the ref *down* as a special prop.
          Because TextInput is wrapped in forwardRef,
          the ref will end up on the <input /> DOM element inside. */}
            <TextInput
                ref={firstNameInputRef}
                label="First name"
                placeholder="Type your name here"
            />

            {/* This button lives in the parent, but can still focus the input
          because it uses the same ref object that points to the input. */}
            <button
                onClick={handleFocusClick}
                style={{
                    marginTop: '0.75rem',
                    padding: '0.5rem 1.25rem',
                    borderRadius: '999px',
                    border: 'none',
                    backgroundColor: '#111827',
                    color: 'white',
                    cursor: 'pointer',
                }}
            >
                Focus the input from parent
            </button>

            {/* Short explanation for learners */}
            <p
                style={{
                    marginTop: '1.25rem',
                    maxWidth: 480,
                    marginInline: 'auto',
                    lineHeight: 1.5,
                }}
            >
                <strong>Key idea:</strong> <code>useRef</code> lets the parent keep a
                reference to the input DOM node, and <code>forwardRef</code> lets the
                child component expose that DOM node to the parent.
            </p>
        </section>
    )
}

export default RefProps