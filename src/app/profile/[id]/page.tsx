interface UserProfileProps {
  params: {
    id: string;
  };
}

export default function UserProfile({ params }: UserProfileProps) {
  return (
    <div>
      <h2>Inside User Profile</h2>
      <span>
        User ID: <strong>{params.id}</strong>
      </span>
    </div>
  );
}
