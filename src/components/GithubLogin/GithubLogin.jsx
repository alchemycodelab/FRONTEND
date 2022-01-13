import { useUser } from '../../context/UserContext';
import { loginWithGitHub } from '../../services/auth';

export default function GithubLogin({ className, label }) {
  const { setUser } = useUser();
  const handleClick = async () => {
    try {
      const user = await loginWithGitHub();
      setUser(user);
    } catch (error) {}
  };

  return (
    <div className={className}>
      <button onClick={handleClick}>{label}</button>
    </div>
  );
}
