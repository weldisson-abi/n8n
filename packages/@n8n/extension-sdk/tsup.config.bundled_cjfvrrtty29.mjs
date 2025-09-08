// tsup.config.ts
import { defineConfig } from "tsup";
var tsup_config_default = defineConfig([
  {
    clean: false,
    entry: ["src/*.ts", "!src/*.test.ts", "!src/*.d.ts", "!src/__tests__/**/*"],
    outDir: "dist",
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
    tsconfig: "tsconfig.common.json"
  },
  {
    clean: false,
    entry: [
      "src/backend/**/*.ts",
      "!src/backend/**/*.test.ts",
      "!src/backend/**/*.d.ts",
      "!src/backend/__tests__/**/*"
    ],
    outDir: "dist/backend",
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
    tsconfig: "tsconfig.backend.json"
  },
  {
    clean: false,
    entry: [
      "src/frontend/**/*.ts",
      "!src/frontend/**/*.test.ts",
      "!src/frontend/**/*.d.ts",
      "!src/frontend/__tests__/**/*"
    ],
    outDir: "dist/frontend",
    format: ["cjs", "esm"],
    dts: true,
    sourcemap: true,
    tsconfig: "tsconfig.frontend.json"
  }
]);
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidHN1cC5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL2hvbWUvd2VsZGlzc29uL3JlcG9zL244bi9uOG4vcGFja2FnZXMvQG44bi9leHRlbnNpb24tc2RrL3RzdXAuY29uZmlnLnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIi9ob21lL3dlbGRpc3Nvbi9yZXBvcy9uOG4vbjhuL3BhY2thZ2VzL0BuOG4vZXh0ZW5zaW9uLXNka1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vaG9tZS93ZWxkaXNzb24vcmVwb3MvbjhuL244bi9wYWNrYWdlcy9AbjhuL2V4dGVuc2lvbi1zZGsvdHN1cC5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd0c3VwJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKFtcblx0e1xuXHRcdGNsZWFuOiBmYWxzZSxcblx0XHRlbnRyeTogWydzcmMvKi50cycsICchc3JjLyoudGVzdC50cycsICchc3JjLyouZC50cycsICchc3JjL19fdGVzdHNfXy8qKi8qJ10sXG5cdFx0b3V0RGlyOiAnZGlzdCcsXG5cdFx0Zm9ybWF0OiBbJ2NqcycsICdlc20nXSxcblx0XHRkdHM6IHRydWUsXG5cdFx0c291cmNlbWFwOiB0cnVlLFxuXHRcdHRzY29uZmlnOiAndHNjb25maWcuY29tbW9uLmpzb24nLFxuXHR9LFxuXHR7XG5cdFx0Y2xlYW46IGZhbHNlLFxuXHRcdGVudHJ5OiBbXG5cdFx0XHQnc3JjL2JhY2tlbmQvKiovKi50cycsXG5cdFx0XHQnIXNyYy9iYWNrZW5kLyoqLyoudGVzdC50cycsXG5cdFx0XHQnIXNyYy9iYWNrZW5kLyoqLyouZC50cycsXG5cdFx0XHQnIXNyYy9iYWNrZW5kL19fdGVzdHNfXy8qKi8qJyxcblx0XHRdLFxuXHRcdG91dERpcjogJ2Rpc3QvYmFja2VuZCcsXG5cdFx0Zm9ybWF0OiBbJ2NqcycsICdlc20nXSxcblx0XHRkdHM6IHRydWUsXG5cdFx0c291cmNlbWFwOiB0cnVlLFxuXHRcdHRzY29uZmlnOiAndHNjb25maWcuYmFja2VuZC5qc29uJyxcblx0fSxcblx0e1xuXHRcdGNsZWFuOiBmYWxzZSxcblx0XHRlbnRyeTogW1xuXHRcdFx0J3NyYy9mcm9udGVuZC8qKi8qLnRzJyxcblx0XHRcdCchc3JjL2Zyb250ZW5kLyoqLyoudGVzdC50cycsXG5cdFx0XHQnIXNyYy9mcm9udGVuZC8qKi8qLmQudHMnLFxuXHRcdFx0JyFzcmMvZnJvbnRlbmQvX190ZXN0c19fLyoqLyonLFxuXHRcdF0sXG5cdFx0b3V0RGlyOiAnZGlzdC9mcm9udGVuZCcsXG5cdFx0Zm9ybWF0OiBbJ2NqcycsICdlc20nXSxcblx0XHRkdHM6IHRydWUsXG5cdFx0c291cmNlbWFwOiB0cnVlLFxuXHRcdHRzY29uZmlnOiAndHNjb25maWcuZnJvbnRlbmQuanNvbicsXG5cdH0sXG5dKTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVQsU0FBUyxvQkFBb0I7QUFFdFYsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0I7QUFBQSxJQUNDLE9BQU87QUFBQSxJQUNQLE9BQU8sQ0FBQyxZQUFZLGtCQUFrQixlQUFlLHFCQUFxQjtBQUFBLElBQzFFLFFBQVE7QUFBQSxJQUNSLFFBQVEsQ0FBQyxPQUFPLEtBQUs7QUFBQSxJQUNyQixLQUFLO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxVQUFVO0FBQUEsRUFDWDtBQUFBLEVBQ0E7QUFBQSxJQUNDLE9BQU87QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNOO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRDtBQUFBLElBQ0EsUUFBUTtBQUFBLElBQ1IsUUFBUSxDQUFDLE9BQU8sS0FBSztBQUFBLElBQ3JCLEtBQUs7QUFBQSxJQUNMLFdBQVc7QUFBQSxJQUNYLFVBQVU7QUFBQSxFQUNYO0FBQUEsRUFDQTtBQUFBLElBQ0MsT0FBTztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ047QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNEO0FBQUEsSUFDQSxRQUFRO0FBQUEsSUFDUixRQUFRLENBQUMsT0FBTyxLQUFLO0FBQUEsSUFDckIsS0FBSztBQUFBLElBQ0wsV0FBVztBQUFBLElBQ1gsVUFBVTtBQUFBLEVBQ1g7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
