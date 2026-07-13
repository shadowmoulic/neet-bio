-- ==============================================================================
-- Run this in your Supabase SQL Editor to allow fetching all chapters' metadata
-- ==============================================================================

create or replace function public.get_chapter_metadata()
returns table(
  id text, 
  num text, 
  title text, 
  subtitle text, 
  color text, 
  color_d text, 
  glyph text, 
  count_flashcards int, 
  count_mcqs int, 
  count_mnemonics int
)
language sql
security definer
as $$
  select 
    id, 
    num, 
    title, 
    subtitle, 
    color, 
    color_d, 
    glyph, 
    count_flashcards, 
    count_mcqs, 
    count_mnemonics 
  from public.neet_chapters;
$$;
