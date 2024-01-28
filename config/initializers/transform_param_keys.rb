ActionDispatch::Request.parameter_parsers[:json] = -> raw_post {
  data = ActiveSupport::JSON.decode(raw_post)
  data = { _json: data } unless data.is_a?(Hash)

  data.deep_transform_keys! { _1.to_s.underscore.parameterize(separator: '_') }

  data.with_indifferent_access
}