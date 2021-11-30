import React, {memo, useState, useCallback, InputHTMLAttributes} from 'react';
import Profile from '../../../shared/src/components/Profile';

const Main: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [id, setId] = useState<string>('');

  const onNameChanged = useCallback<
    NonNullable<InputHTMLAttributes<HTMLInputElement>['onChange']>
  >((event) => setName(event.target.value), []);

  const onIdChanged = useCallback<
    NonNullable<InputHTMLAttributes<HTMLInputElement>['onChange']>
  >((event) => setId(event.target.value), []);

  return (
    <div>
      <label>
        Name
        <input onChange={onNameChanged} />
      </label>
      <label>
        Id
        <input onChange={onIdChanged} />
      </label>
      <Profile name={name} id={id} />
    </div>
  );
};

export default memo(Main);
