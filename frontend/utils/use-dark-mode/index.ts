/*
code sourced from https://github.com/donavon/use-dark-mode
all the origianl licences still apply and complete credit still goes to the original author
modified by Rokibul Islam, https://github.com/rokibulislaam
*/

//@ts-nocheck
import { useEffect, useCallback, useMemo } from 'react';
import useEventListener from '@use-it/event-listener';

import initialize from './initialize';
const useDarkMode = (
  initialValue = false,
  {
    element,
    classNameDark,
    classNameLight,
    onChange,
    storageKey = 'darkMode',
    storageProvider,
    global,
  } = {}
) => {
  const {
    usePersistedDarkModeState,
    getDefaultOnChange,
    getInitialValue,
    mediaQueryEventTarget,
  } = useMemo(
    () => initialize(storageKey, storageProvider, global),
    [storageKey, storageProvider, global]
  );

  const [state, setState] = usePersistedDarkModeState(
    getInitialValue(initialValue)
  );

  const stateChangeCallback = useMemo(
    () =>
      onChange || getDefaultOnChange(element, classNameDark, classNameLight),
    [onChange, element, classNameDark, classNameLight, getDefaultOnChange]
  );

  // Call the onChange handler
  useEffect(() => {
    stateChangeCallback(state);
  }, [stateChangeCallback, state]);

  // Listen for media changes and set state.
  useEventListener(
    'change',
    ({ matches }) => setState(matches),
    mediaQueryEventTarget
  );

  return {
    value: state,
    enable: useCallback(() => setState(true), [setState]),
    disable: useCallback(() => setState(false), [setState]),
    toggle: useCallback(() => setState((current) => !current), [setState]),
  };
};

export default useDarkMode;
