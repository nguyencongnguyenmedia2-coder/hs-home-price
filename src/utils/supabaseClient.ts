import { createClient } from '@supabase/supabase-js';

export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://hdwzpstjebsbreatvjzd.supabase.co';
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_ftoU5mkwYKVVMArDC0O_yQ_cQQ2HA1q';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

/**
 * Kiểm tra trạng thái kết nối tới Supabase
 */
export async function checkSupabaseConnection(): Promise<{ connected: boolean; message: string }> {
  try {
    const { error } = await supabase.from('products').select('count', { count: 'exact', head: true });
    if (error) {
      if (error.code === '42P01') {
        return {
          connected: true,
          message: 'Kết nối Supabase thành công! Bảng dữ liệu chưa được khởi tạo (vui lòng chạy schema.sql trong SQL Editor).'
        };
      }
      return {
        connected: false,
        message: `Lỗi Supabase: ${error.message} (${error.code || 'Unauthorized'})`
      };
    }
    return {
      connected: true,
      message: 'Kết nối Supabase và cơ sở dữ liệu bảng giá thành công!'
    };
  } catch (err: any) {
    return {
      connected: false,
      message: `Không thể kết nối Supabase: ${err.message || 'Lỗi mạng'}`
    };
  }
}
