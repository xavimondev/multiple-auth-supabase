# Multiple authentication on Supabase

## Supabase - Set Up a Project and Profile table

1. Login to [Login - Supabase](https://supabase.com/)
2. Create a new project and fill the fields
3. Go to SQL Editor and select 'User Management Starter' template
4. Remove realtime block and storage block of the template
5. On profiles table: 
    - Remove the following columns 'avatar_url' and 'website' and rename 'username' column to 'full_name'
    - Remove unique constraint applied on 'username' column
6. Run the script and the table 'profiles' will be created

## Supabase - Project API Keys

1. Sign In on Supabase
2. Go to settings option on sidebar
3. Select API option on project settings block
4. Copy 'anon public' and 'URL'

## Supabase - Set Up Email Auth

1. Sign In on Supabase
2. Go to authentication option on sidebar
3. On Email Auth block, disabled `Double confirm email changes` and `Enable email confirmations`

## Supabase - Set Up Google Provider

- [Authenticacion with Google](https://supabase.com/docs/guides/auth/auth-google)

## Development

1. Clone this repo to a directory and then run `npm install`
2. Set-up your environment variables following the `.env.example` file. NOTE: The environment file must be named like: `.env`
  - You can get the `SUPABASE_URL` and `ANON_KEY` following [Supabase - Project API Keys](#supabase-project-api-keys)
3. Run `npm run dev` to start developing mode
