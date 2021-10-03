import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://wividmundzugloihzepp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMDYxOTczMiwiZXhwIjoxOTQ2MTk1NzMyfQ.D2eVnJ4dlnvt9yKI-9DYcAWxpxVLhChgRdD0AEsx3R8')

export {
  supabase
}