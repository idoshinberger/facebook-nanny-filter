export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      action_logs: {
        Row: {
          action_details: Json | null
          action_type: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          action_details?: Json | null
          action_type: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          action_details?: Json | null
          action_type?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "action_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      babysitters: {
        Row: {
          age: number | null
          created_at: string
          experience_years: number | null
          facebook_id: string | null
          friend_count: number | null
          id: string
          location: string | null
          mutual_friends: number | null
          name: string
          profile_picture_url: string | null
          profile_url: string | null
          scope: string | null
          updated_at: string
        }
        Insert: {
          age?: number | null
          created_at?: string
          experience_years?: number | null
          facebook_id?: string | null
          friend_count?: number | null
          id?: string
          location?: string | null
          mutual_friends?: number | null
          name: string
          profile_picture_url?: string | null
          profile_url?: string | null
          scope?: string | null
          updated_at?: string
        }
        Update: {
          age?: number | null
          created_at?: string
          experience_years?: number | null
          facebook_id?: string | null
          friend_count?: number | null
          id?: string
          location?: string | null
          mutual_friends?: number | null
          name?: string
          profile_picture_url?: string | null
          profile_url?: string | null
          scope?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          facebook_id: string | null
          facebook_refresh_token: string | null
          facebook_token: string | null
          facebook_token_expires_at: string | null
          id: string
          name: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          facebook_id?: string | null
          facebook_refresh_token?: string | null
          facebook_token?: string | null
          facebook_token_expires_at?: string | null
          id: string
          name?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string | null
          facebook_id?: string | null
          facebook_refresh_token?: string | null
          facebook_token?: string | null
          facebook_token_expires_at?: string | null
          id?: string
          name?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      search_templates: {
        Row: {
          age_max: number | null
          age_min: number | null
          area: string | null
          created_at: string
          experience_years: number | null
          id: string
          min_friends: number | null
          name: string
          require_picture: boolean | null
          scope: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          age_max?: number | null
          age_min?: number | null
          area?: string | null
          created_at?: string
          experience_years?: number | null
          id?: string
          min_friends?: number | null
          name: string
          require_picture?: boolean | null
          scope?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          age_max?: number | null
          age_min?: number | null
          area?: string | null
          created_at?: string
          experience_years?: number | null
          id?: string
          min_friends?: number | null
          name?: string
          require_picture?: boolean | null
          scope?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "search_templates_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_babysitters: {
        Row: {
          babysitter_id: string
          created_at: string
          id: string
          message_sent_at: string | null
          response_received_at: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          babysitter_id: string
          created_at?: string
          id?: string
          message_sent_at?: string | null
          response_received_at?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          babysitter_id?: string
          created_at?: string
          id?: string
          message_sent_at?: string | null
          response_received_at?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_babysitters_babysitter_id_fkey"
            columns: ["babysitter_id"]
            isOneToOne: false
            referencedRelation: "babysitters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_babysitters_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
